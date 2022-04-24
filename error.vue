<template>
  <NuxtLayout name="default">
    asasd ERROR
    <!--      <NuxtPage/>-->
  </NuxtLayout>
</template>
<script lang="ts">
import { useHead } from '@vueuse/head'
import { defineComponent } from 'vue'
import App from './app.vue'

export default defineComponent({
  name: 'Error',
  components: {
    App
  },
  setup() {
    useHead({
      bodyAttrs: {
        class: 'page-error'
      }
    })
  }
})
</script>

