<template>
  <nuxt-link :class="['btn-nav-down', colorClass]" :to="to">
    <i class="fa fa-chevron-down"></i>
  </nuxt-link>
</template>
<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'

export default defineComponent({
  name: 'BtnNavDown',
  props: {
    to: { type: String, required: true },
    color: { type: String as () => "red" | "blue" | "white" | "", default: "" }
  },
  setup(props) {

    const colorClass: ComputedRef<string> = computed(() => `btn-nav-down--${props.color}`)
    return {
      colorClass
    }
  }

})
</script>
