# syntax = docker/dockerfile:1

FROM node:lts-slim AS build
WORKDIR /src

COPY package.json package-lock.json ./
RUN npm ci

COPY --link . .

ENV NODE_ENV=production
RUN npm run generate

FROM caddy:2-alpine AS final
WORKDIR /app

COPY Caddyfile /app/Caddyfile
COPY --from=build /src/.output/public /app

CMD [ "caddy", "run" ]
