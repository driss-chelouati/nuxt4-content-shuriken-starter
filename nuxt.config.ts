// import exposeColors from './tailwind/plugin-expose-colors'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-25',
  future: {
    compatibilityVersion: 4,
  },
  // ssr: false,
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    '@shuriken-ui/nuxt', 
  ],
  css: ['~/assets/main.css'],
  content: {
    build: {
      markdown: {
        toc: { depth: 4, searchDepth: 4 },
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark',
          }
        }
      }
    },
    renderer: {
      anchorLinks: true,
    },
  },
})