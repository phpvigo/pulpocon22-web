<template>
  <div>
    <web-header/>
    <mobile-menu :visible="visible"/>
    <NuxtPage/>
    <web-footer/>
  </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from 'vue'
import MobileMenu from '~/components/MobileMenu'
import WebFooter from '~/components/WebFooter'
import WebHeader from '~/components/WebHeader'
import { useMobileMenuStore } from '~/stores/mobileMenu'
import { useUIStore } from '~/stores/ui'

export default defineComponent({
  name: 'App',
  components: {
    WebFooter,
    MobileMenu,
    WebHeader
  },
  setup() {
    const { setNotInTop } = useUIStore()
    const { visible } = useMobileMenuStore()


    const handleScroll = (): void => {
      setNotInTop(window.scrollY > 0)
    }

    onMounted(() => {
      handleScroll()
      window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      visible
    }
  }
})
</script>

