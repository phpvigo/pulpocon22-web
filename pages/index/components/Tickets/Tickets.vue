<template>
  <section class="home-tickets section section--red section--bg-center">
    <a id="tickets"></a>
    <div class="container-fluid-900">
      <header>
        <h2 class="section__title">
          Entradas
        </h2>
      </header>
      <div class="section__content">
        <p>
          Las entradas estarán disponibles en breve, pero si quieres ser el primero en enterarte cuando salgan a la
          venta apuntate y te avisaremos!.
        </p>
      </div>
      <footer class="section__footer">
        <a class="btn btn--contrast" href="#link-to-google-form" target="_blank">
          Apúntate a la preventa
        </a>
      </footer>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'HomeTickets',
  setup() {
    return {}
  }
})
</script>
