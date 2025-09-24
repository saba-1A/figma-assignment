export default defineNuxtConfig({
  compatibilityDate: '2025-09-23',

  css: [
    '~/assets/css/app.css',
    '@/assets/css/figma.css'
  ],

  modules: ['@nuxtjs/tailwindcss'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: 'Figma : The Collaborative Interactive Design Tool',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        // SVG logo favicon
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },

        // PNG favicons for multiple sizes
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-180x180.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon-512x512.png' },

        // Google Fonts - Poppins
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap' },
      ],
    },
  },
});
