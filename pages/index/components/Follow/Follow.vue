<template>
  <section class="home-follow section section--red">
    <a id="follow"></a>
    <div class="container-fluid-900">
      <header class="section__header">
        <h3 class="section__title">
          Síguenos y te mantendremos informado
        </h3>
      </header>
      <div class="section__content">
        <div class="home-follow__links">
          <a v-for="item in social" :href="item.link" :title="item.name" class="home-follow__link" target="_blank">
            <i :class="item.faIcon"></i> <span>{{ item.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import social from '~/data/social'

export default defineComponent({
  name: 'HomeFollow',
  setup() {
    return {
      social
    }
  }
})
</script>
