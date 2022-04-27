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
          Las entradas estarán disponibles en breve, pero si quieres ser el primero en enterarte cuando salgan a la
          venta apuntate y te avisaremos!.
        </p>
        <p>
          Además en esta edición organizamos un taller de CQRS impartido por Carlos Buenosvinos y Christian Soronellas
          ¿Te lo vas a perder?
        </p>
      </div>
      <footer class="section__footer">
        <a class="btn btn--contrast"
           href="https://docs.google.com/forms/d/13RxrQ1WftYAGUJBnWIqIspmkN_CPVVSJT-pnhus8UFQ"
           target="_blank">
          Apúntate a la preventa
        </a>

        <a class="btn btn--contrast"
           href="https://docs.google.com/forms/d/1APHhuxOySc_wnOIHOtzYKniX_Yun8OXSsq2ViWlhwH8/"
           target="_blank">
          Apúntate al taller CQRS
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
