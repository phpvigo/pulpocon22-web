<template>
  <section class="home-venue section section--blue section--bg-bottom">
    <a id="venue"></a>
    <div class="container-fluid-900">
      <header class="section__header">
        <h2 class="section__title">
          Ubicación
        </h2>
      </header>
      <div class="section__content">
        <a ref="nofollow, noopener" href="https://www.afundacion.org/es/centros/centro/centro_social_afundacion_vigo"
           target="_blank">
          Auditorio Sede Afundación Vigo <a class="fa fa-info-circle"></a>
        </a>
        <address>c/ Policarpo Sanz, 24 - 26, Vigo. 36202, Pontevedra</address>
      </div>
      <footer class="section__footer">
        <i class="fa fa-bus"></i> Autobús urbano
        Líneas: C3, CAC, C7, L11, 12B, C4A, C5A, C4B, L8, C5B, 12A, C9A. L17, C9A, C15C.
        <a
            ref="nofollow, noopener"
            href="https://moovitapp.com/?to=R%C3%BAa%20Policarpo%20Sanz%2024&tll=42.237556_-8.722738&customerId=5546&metroId=3841&lang=es"
            target="_blank">Calcular ruta</a>
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
