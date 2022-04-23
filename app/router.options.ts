import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: to.hash === '#home' ? 0 : 100
      }
    } else {
      return {
        top: 0
      }
    }
  }
}
