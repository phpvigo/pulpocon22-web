import { defineNuxtConfig } from 'nuxt'

import { Mode } from 'vite-plugin-markdown'

const mdPlugin = require('vite-plugin-markdown')

const pkg = require('./package')

export default defineNuxtConfig({
  mode: 'static',
  buildModules: ['@pinia/nuxt'],
  modules: [
    '@nuxt/content'
  ],
  components: {
    dirs: []
  },
  css: ['~/assets/scss/app.scss', '~/node_modules/@fortawesome/fontawesome-free/css/all.css'],
  meta: {
    title: 'PulpoCon22 - 1, 2 y 3 de Septiembre en Vigo 🐙',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'PulpoCon 🐙 es la conferencia que acercará el movimiento “crafter” y el “clean code” a la comunidad de desarrolladores de Galicia y su área de influencia mediante charlas y talleres.  Técnicas, arquitecturas y modelos que fomentan mejores profesionales más allá del lenguaje utilizado. Con reconocidos ponentes de gran prestigio nacional e internacional. Vigo, 1, 2 y 3 de Septiembre de 2022'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'PulpoCon 22'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'PulpoCon 🐙 es la conferencia que acercará el movimiento “crafter” y el “clean code” a la comunidad de desarrolladores de Galicia y su área de influencia mediante charlas y talleres.  Técnicas, arquitecturas y modelos que fomentan mejores profesionales más allá del lenguaje utilizado. Con reconocidos ponentes de gran prestigio nacional e internacional. Vigo, 1, 2 y 3 de Septiembre de 2022 '
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://pulpocon.es/og-image-22.jpg'
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    script: [
      { src: '/libs/tarteaucitron/tarteaucitron.js' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#3DCDF9' },
  plugins: [],
  build: {
    extractCSS: true
  },
  render: {
    resourceHints: false
  },
  vite: {
    plugins: [mdPlugin({
      mode: Mode.VUE
    })],
    assetsInclude: ['**/*.m4v']
  }
})
