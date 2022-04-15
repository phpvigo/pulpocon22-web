import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMobileMenuStore = defineStore('mobile-store', () => {
  const visible = ref(false)

  const toggle = (): void => {
    visible.value = !visible.value
  }

  const close = (): void => {
    visible.value = false
  }

  const open = (): void => {
    visible.value = true
  }

  return {
    visible,
    open,
    close,
    toggle
  }
})

