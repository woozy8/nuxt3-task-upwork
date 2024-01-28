export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Poppins: [700],
      'Nunito+Sans': [600, 700],
    },
  },
})
