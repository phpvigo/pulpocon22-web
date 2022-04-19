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
        </article>

        <header class="home-hero__header text-block">
          <h2 class="blue">
            Vigo, 1, 2 y 3 de Septiembre de 2022
          </h2>
        </header>

        <btn-nav-down color="red" to="/#diamond"></btn-nav-down>
      </div>
    </div>
    <video autoplay class="home-hero__video" loop muted src="/video/pulpocon.m4v"></video>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BtnNavDown from '~/components/BtnNavDown'
import Logo from '~/components/Logo.vue'

export default defineComponent({
  name: 'HomeHero',
  components: {
    Logo,
    BtnNavDown
  },
  setup() {

    return {}
  }
})
</script>
