import { defineNuxtPlugin } from '#app'
import { Tab, Tabs } from 'vue3-tabs-component';

export default defineNuxtPlugin(nuxtApp => {
  console.log('here')
  nuxtApp.vueApp
    .component('tabs', Tabs)
    .component('tab', Tab)
})
