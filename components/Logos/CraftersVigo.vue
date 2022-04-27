<template>
  <img src="~/assets/i/logo-craftersvigo.png" class="organizer organizer--craftersvigo" alt="Crafters Vigo"/>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LogoCraftersVigo',
  props: {
    color: { type: String, default: '' }
  }
})
</script>
