<template>
  <section id="home" class="home-hero">
    <div class="home-hero__content">
      <div class="container-fluid-900">
        <logo class="home-hero__logo"></logo>

        <article class="home-hero__desc text-block">
          <p>
            <strong>PulpoCon</strong> es la conferencia que acercará el movimiento “crafter” y el “clean code” a la
            comunidad de desarrolladores de Galicia y su área de influencia mediante charlas y talleres.
          </p>

          <p>Técnicas, arquitecturas y modelos que fomentan mejores profesionales más allá del lenguaje utilizado.</p>

          <p>Con reconocidos ponentes de gran prestigio nacional e internacional.</p>

          <span v-if="config.ticketsUrl" :href="config.ticketsUrl" class="strikethrough link--blue">Compra ya tus entradas</span>
        </article>

        <sponsors :type="SponsorType.Diamond"></sponsors>

        <header class="home-hero__header text-block">
          <h2 class="blue">
            Vigo, 1, 2 y 3 de Septiembre de 2022
          </h2>
        </header>

        <btn-nav-down color="red" to="/#tickets"></btn-nav-down>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import config from '@/data/config'
import { defineComponent } from 'vue'
import BtnNavDown from '~/components/BtnNavDown'
import Logo from '~/components/Logo.vue'
import Sponsors from '~/components/Sps'
import { SponsorType } from '~/data/sponsors'

export default defineComponent({
  name: 'HomeHero',
  components: {
    Logo,
    Sponsors,
    BtnNavDown
  },
  setup () {
    return {
      config,
      SponsorType
    }
  }
})
</script>
