import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui-stores', () => {
  const notInTop = ref(true)

  const setNotInTop = (state: boolean): void => {
    notInTop.value = state
  }

  return {
    notInTop,
    setNotInTop
  }
})
