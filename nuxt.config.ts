export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Poppins: [700],
      Nunito: [600, 700],
    },
  },
})
