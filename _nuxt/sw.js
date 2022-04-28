importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2ee4b0c.js",
    "revision": "2a902f26f0b6669242c92f856522a765"
  },
  {
    "url": "/_nuxt/5948ccc.js",
    "revision": "37d27e0497377d583c9f35ab3307913a"
  },
  {
    "url": "/_nuxt/80a780b.js",
    "revision": "974329e2205e7ea84870907b7317d6ae"
  },
  {
    "url": "/_nuxt/90a0499.js",
    "revision": "64d748205c4909fa92412cf33de0598c"
  },
  {
    "url": "/_nuxt/bb4e824.js",
    "revision": "6b124bba96984c0a968fc45ee9c15f98"
  },
  {
    "url": "/_nuxt/bb919c4.js",
    "revision": "571a5d538be54166d7f94239be31dc07"
  },
  {
    "url": "/_nuxt/css/6d4ccd4.css",
    "revision": "ee5204a14141b9a99f543e4fe2fd279d"
  },
  {
    "url": "/_nuxt/css/dff8b11.css",
    "revision": "260ef6f39cd4f11ac479db35fd025827"
  },
  {
    "url": "/_nuxt/fa3cc0a.js",
    "revision": "eb6272989a0bceac183dd9f1d193ef57"
  }
], {
  "cacheId": "PHPulpo-Con-2020",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
