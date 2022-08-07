<template>
  <div>
    <web-header/>
    <mobile-menu :visible="visible"/>
    <slot name="default">
      <index></index>
    </slot>

    <web-footer/>
  </div>
</template>
<script lang="ts">
import { storeToRefs } from 'pinia'
import { defineComponent, onBeforeMount, onBeforeUnmount, onMounted } from 'vue'
import MobileMenu from '~/components/MobileMenu'
import WebFooter from '~/components/WebFooter'
import WebHeader from '~/components/WebHeader'
import { useMobileMenuStore } from '~/stores/mobileMenu'
import { useUIStore } from '~/stores/ui'
import { navigateTo, useRoute } from '#app'
import Index from '~/pages/index/index.vue'

export default defineComponent({
  name: 'default',
  components: {
    Index,
    WebFooter,
    MobileMenu,
    WebHeader
  },
  setup () {
    const { setNotInTop } = useUIStore()
    const mobileMenuStore = useMobileMenuStore()
    const { visible } = storeToRefs(mobileMenuStore)

    const handleScroll = (): void => {
      setNotInTop(window.scrollY > 0)
    }

    console.log('asdasd')

    const route = useRoute()
    onBeforeMount(() => {
      if (!route.hash) {
        navigateTo('/#home')
      }
    })

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
