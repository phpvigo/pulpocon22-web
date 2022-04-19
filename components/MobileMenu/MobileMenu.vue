<template>
  <transition name="slide-right">
    <div
        v-show="visible"
        :class="{'not-in-top': notInTop}"
        class="mobile-menu"
    >
      <div
          class="cover"
          @click="closeMenu"
      />
      <div class="navigation">
        <nav role="navigation">
          <ul>
            <li
                v-for="(item, key) in menu"
                :key="key"
            >
              <a v-if="item.link.indexOf('http') > -1" :href="item.link" target="_blank">
                {{ item.title }}
              </a>
              <nuxt-link
                  v-else
                  :to="item.link"
                  class="scrollactive-item"
                  @click.native="closeMenu"
              >
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </transition>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import menu from '~/data/menu'
import { useMobileMenuStore } from '~/stores/mobileMenu'
import { useUIStore } from '~/stores/ui'

export default defineComponent({
  name: 'MobileMenu',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const { notInTop } = useUIStore()
    const { close: closeMenu } = useMobileMenuStore()

    return {
      closeMenu,
      menu,
      notInTop
    }
  }
})
</script>
