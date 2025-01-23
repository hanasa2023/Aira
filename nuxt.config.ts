// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },
  srcDir: 'src/',

  modules: [
    'nuxt-electron',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@pinia/nuxt',
  ],
  electron: {
    build: [
      {
        entry: 'electron/main.ts',
      },
    ],
    renderer: {},
    disableDefaultOptions: true,
  },
  shadcn: {
    prefix: '',
    componentDir: 'src/components/ui',
  },
})
