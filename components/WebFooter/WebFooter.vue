<template>
  <footer class="web-footer">
    <div class="web-footer__content container-fluid-1440">
      <div class="event-organizer">
        <h3 class="event-organizer__title">
          Organiza
        </h3>
        <a class="event-organizer__link event-organizer__link--aindustriosa" href="https://intranet.aindustriosa.org/">
          <img alt="A Industriosa" src="/i/aindustriosa.png">
        </a>
        <a class="event-organizer__link event-organizer__link--phpvigo" href="https://phpvigo.com/">
          <img alt="PHPVigo" src="/i/phpvigo.png">
        </a>
        <a class="event-organizer__link event-organizer__link--vigotech" href="https://vigotech.org/">
          <img alt="VigoTech" src="/i/vigotech.png">
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

export default defineComponent({
  name: 'WebFooter'
})
</script>
