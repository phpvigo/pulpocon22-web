<template>
  <div>
    <NuxtLayout>
      asasd APP
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script lang="ts">
import { definePageMeta } from 'nuxt/dist/pages/runtime'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    definePageMeta({
      layout: 'default'
    })
  }
})
</script>

