export default {
  target: 'static',
  router: {
    base: '/',
  },
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
        href: 'https://fonts.googleapis.com/css2?family=Livvic:ital,wght@0,500;0,600;0,700;1,500&display=swap',
      },
    ],
  },
  css: [
    '~/assets/style/main.sass',
  ],
  image: {
    // Should fix transformation for Vercel according to: https://github.com/nuxt/image/issues/395#issuecomment-905868750
    screens: {
      small: 640,
      medium: 768,
      large: 1024,
    },
  },
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@nuxt/image',
  ],
  modules: [
    '@nuxtjs/pwa',
  ],
  storybook: {
    parameters: {
      layout: 'fullscreen',
    },
  },
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  build: {
  },
};
