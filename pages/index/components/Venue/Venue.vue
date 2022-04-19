<template>
  <section id="location" class="home-venue section section--blue section--bg-bottom">
    <div class="container-fluid-900">
      <header class="section__header">
        <h2 class="section__title">
          Ubicación
        </h2>
      </header>
      <div class="section__content">
        <div class="home-venue__location">
          <a ref="nofollow, noopener" href="https://www.afundacion.org/es/centros/centro/centro_social_afundacion_vigo"
             target="_blank">
            <i class="fa fa-info-circle"></i> Auditorio Sede Afundación Vigo
          </a>
          <address>c/ Policarpo Sanz, 24 - 26, Vigo. 36202, Pontevedra</address>
        </div>

        <iframe
            frameborder="0"
            height="407"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=es&q=Sede%20Afundacion%20Vigo+(PHPulpo%20Con)&ie=UTF8&t=&z=17&iwloc=B&output=embed"
            width="100%"
        >
          <a href="https://www.mapsdirections.info/calcular-ruta.html">mapas y direcciones</a>
        </iframe>
      </div>
      <footer class="section__footer">
        <ul>
          <li class="transport-info">
            <h4 class="transport-info__title">
              <i class="fa fa-bus"></i> Autobús urbano
            </h4>
            <div class="transport-info__content">
              Líneas: C3, CAC, C7, L11, 12B, C4A, C5A, C4B, L8, C5B, 12A, C9A. L17, C9A, C15C.
              <a
                  ref="nofollow, noopener"
                  href="https://moovitapp.com/?to=R%C3%BAa%20Policarpo%20Sanz%2024&tll=42.237556_-8.722738&customerId=5546&metroId=3841&lang=es"
                  target="_blank">Calcular ruta</a>
            </div>
          </li>
          <li class="transport-info">
            <h4 class="transport-info__title">
              <i class="fa fa-plane-arrival"></i> Avión
            </h4>
            <div class="transport-info__content">
              Aeropuerto de Peinador: a 17 km de distancia. <a
                href="https://www.aena-aeropuertos.es/csee/Satellite/Aeropuerto-Vigo/es/"
                target="_blank">Más información</a>
            </div>
          </li>
          <li class="transport-info">
            <h4 class="transport-info__title">
              <i class="fa fa-train"></i> Tren
            </h4>
            <div class="transport-info__content">
              <p>Estación de trenes Guixar: R/ Areal, s/n Vigo. <a
                  href="http://www.adif.es/es_ES/infraestructuras/estaciones/22308/informacion_000390.shtml"
                  target="_blank">
                Información de la estación de trenes Vigo-Guixar.
              </a>
              </p>
            </div>
          </li>
        </ul>
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
