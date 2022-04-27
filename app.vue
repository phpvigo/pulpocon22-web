<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script lang="ts">
import { definePageMeta } from '#imports'
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

