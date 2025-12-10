// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/motion/nuxt",
    "nuxt-icon",
    "@nuxtjs/google-fonts"
  ],

  css: ["~/assets/css/main.css"],
  plugins:[
    "~/plugins/lenis.client.ts"
  ],

  colorMode: {
    classSuffix: "",
  },
  spaLoadingTemplate:'./app-loading.html',
  googleFonts: {
    families: {
      Roboto: {
        wght: [100, 400, 700],
      },
      Poppins: {
        wght: [100, 400],
      },
    },
    display: "swap",
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    base64: false,
  },

  // plugins: ["~/plugins/luxy.js"],

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  runtimeConfig: {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID,
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
    },
  },
  compatibilityDate: "2024-07-25",
});
