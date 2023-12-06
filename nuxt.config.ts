// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head:{
      title: "Автомашины замын хураамж",
    },
  },
  devtools: {enabled: true},
  ssr: false,
  modules: ["@nuxt/ui", "@nuxtjs/device"],
  typescript: {strict: true,},
  spaLoadingTemplate: false,
  css: ["@/assets/css/main.css"]
})
