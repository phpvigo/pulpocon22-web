<template>
  <section class="home-tickets section section--red section--bg-center">
    <a id="tickets"></a>
    <div class="container-fluid-900">
      <header class="section__header">
        <h2 class="section__title">
          Entradas
        </h2>
      </header>
      <div class="section__content">
        <p>
          Hasta el 📅 30 de Junio estamos en Super Early Bird 🐦, por lo que podrás comprar tus entradas 🎟️ al precio
          más reducido. Desde sólo 20€ tendrás acceso a las charlas de ponentes muy top 🔝
        </p>
      </div>
      <footer class="section__footer">
        <a class="btn btn--contrast"
           :href="config.ticketsUrl"
           target="_blank">
          Compra ya tus entradas
        </a>
      </footer>
    </div>
  </section>
</template>
<script lang="ts">
import config from '@/data/config'
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'HomeTickets',
  setup() {
    return {
      config
    }
  }
})
</script>
