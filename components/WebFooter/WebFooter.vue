<template>
  <footer class="web-footer">
    <div class="web-footer__content container-fluid-1440">
      <div class="event-organizer">
        <h3 class="event-organizer__title">
          Organizan
        </h3>
        <a class="event-organizer__link event-organizer__link--aindustriosa" href="https://intranet.aindustriosa.org/">
          <logo-industriosa color="#222"></logo-industriosa>
        </a>
        <a class="event-organizer__link event-organizer__link--vigotech" href="https://vigotech.org/">
          <logo-vigo-tech color="#222"></logo-vigo-tech>
        </a>
      </div>
    </div>
    <div class="web-footer__links container-fluid-1440">
      <nuxt-link to="/codigo-de-conducta">
        Código de conducta
      </nuxt-link>

      <a href="mailto:hello@pulpocon.es">
        hello@pulpocon.es
      </a>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogoIndustriosa from '~/components/Logos/Aindustriosa.vue'
import LogoVigoTech from '~/components/Logos/VigoTech.vue'

export default defineComponent({
  name: 'WebFooter',
  components: { LogoIndustriosa, LogoVigoTech }
})
</script>
