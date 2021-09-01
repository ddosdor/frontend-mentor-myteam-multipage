export default {
  target: 'static',
  head: {
    title: 'frontend-mentor-myteam-multipage',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'crossorigin' },
      {
        rel: 'stylesheet',
        media: 'print',
        onload: 'this.onload=null;this.removeAttribute(\'media\');',
        href: 'https://fonts.googleapis.com/css2?family=Livvic:wght@600;700&display=swap',
      },
    ],
  },
  css: [
    '~/assets/style/main.sass',
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxtjs/pwa',
  ],
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  build: {
  },
};
