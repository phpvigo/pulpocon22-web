<template>
  <article class="page-simple__wrapper">
    <div class="container-fluid-900">
      <header class="page-simple__header">
        <h1 class="page-simple__title">Diversidad</h1>
      </header>


      <div class="page-simple__content">
        <p>La diversidad, importa. Desde la organización de la <strong>PulpoCon</strong> sabemos que cuando el
          desarrollo de una aplicación se lleva a cabo por un equipo diverso, esto hace que el resultado sea de mayor
          calidad.</p>

        <p>Tanto la organización de la <strong>PulpoCon</strong>, como sus voluntarios y miembros consideran, respetan,
          valoran y promueven las diferencias como una parte fundamental de sus valores.</p>

        <p>Estamos comprometidos con la diversidad de nuestra sociedad y de nuestra propia comunidad. Cada persona es
          única y todas ellas son, a su vez, diversas en nacionalidad, edad, raza, origen étnico, creencias, prácticas
          espirituales, género, identidad de género, orientación sexual, trabajo, estado civil, etc. lo que enriquece a
          nuestra profesión a la comunidad de desarrolladoras y a toda la sociedad.</p>

        <p>Por todo ello, queremos transmitir nuestra invitación sincera a todos los colectivos que suelen estar poco
          representados en la comunidad tecnológica a que formen parte de la PulpoCon</p>

        <p><strong>Las entradas diversity estan patrocinadas por:</strong></p>
      </div>

      <sponsors :type="SponsorType.Octopus"></sponsors>
    </div>
  </article>
</template>
<script lang="ts">
import { useHead } from '@vueuse/head'
import Sponsors from '~/components/Sps'
import { defineComponent } from 'vue'
import { SponsorType } from '~/data/sponsors'

export default defineComponent({
  name: 'Diversity',
  components: {
    Sponsors
  },
  setup () {
    useHead({
      bodyAttrs: {
        class: 'page-simple page-diversity'
      }
    })

    return {
      SponsorType
    }

  }
})
</script>
