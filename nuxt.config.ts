import { defineNuxtConfig } from 'nuxt3'

const pkg = require('./package')

export default defineNuxtConfig({
  mode: 'universal',
  buildModules: ['@pinia/nuxt'],
  components: {
    dirs: []
  },
  css: ['~/assets/scss/app.scss', '~/node_modules/@fortawesome/fontawesome-free/css/all.css'],
  head: {
    title: 'PulpoCon22',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      { src: '/public/libs/tarteaucitron/tarteaucitron.client.js' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#3DCDF9' },
  plugins: [
    // { src: '~/plugins/tarteaucitron.client.js', ssr: false },
  ],
  build: {
    extractCSS: true,
  }
})
