import { definePerson } from 'nuxt-schema-org/schema';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@vueuse/nuxt'
  ],
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/css/globals.css'],
  site: {
    url: 'https://www.fannyregestemistral.fr',
    name: 'Fanny Regeste Mistral',
    description: 'Portfolio de Fanny Regeste Mistral (Storyboard, Illustration, Animation)',
    defaultLocale: 'en'
  },
  future: { compatibilityVersion: 4 },
  experimental: { inlineRouteRules: true },
  compatibilityDate: '2025-05-15',
  nitro:
  {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true
    }
  },
  // Development config
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never',
        semi: true
      }
    }
  },
  image: {
    format: ['webp']
  },
  ogImage: {
    enabled: false
  },
  schemaOrg: {
    identity: definePerson({
      name: 'Fanny Regeste Mistral',
      givenName: 'Fanny',
      familyName: 'Regeste Mistral',

      image: '/og-image.jpg',
      jobTitle: 'Storyboard artist from Lyon, France',

      email: 'f.regestemistral@hotmail.com',
      url: 'https://fannyregestemistral.fr',
      sameAs: [
        'https://x.com/MimosaFRM',
        'https://linkedin.com/in/fanny-regeste/',
        'https://youtube.com/channel/UCWHwmpa-9TS6wykRSbSzXtA'
      ]
    })
  }
});
