// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", 'nuxt-typed-router'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "/assets/_colors.scss" as *;'
        }
      },
    }
  },
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
})