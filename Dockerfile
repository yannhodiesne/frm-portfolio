# syntax = docker/dockerfile:1

FROM oven/bun:1 AS build
WORKDIR /src

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

COPY --link . .

ENV NODE_ENV=production
RUN bun run generate

FROM caddy:2-alpine AS final
WORKDIR /app

COPY Caddyfile /app/Caddyfile
COPY --from=build /src/.output/public /app

CMD [ "caddy", "run" ]
