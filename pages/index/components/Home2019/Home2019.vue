<template>
  <section id="2019" class="home-2019 section section--white section--bg-bottom">

    <div class="container-fluid-900">
      <header class="section__header">
        <h2 class="section__title">
          PulpoCon 19
        </h2>
      </header>
      <div class="section__content">
        <p>
          La primera edición de la PulpoCon se celebró en Vigo el 7 de Septiembre de 2019 y la verdad es que fúe un gran
          evento, ¿Quieres volver a disfrutarlo?.
        </p>
        <p>Hemos publicado los videos de las charlas para que puedas hacer boca antes de la <strong>PulpoCon 22</strong>
        </p>
        <a class="btn" href="https://2019.pulpocon.es">
          Rememora la PulpoCon 19
        </a>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Sponsors from '~/components/Sps'
import { SponsorType } from '~/data/sponsors'

export default defineComponent({
  name: 'Home2019',
  components: {
    Sponsors
  },
  setup () {
    return {
      SponsorType
    }
  }
})
</script>
