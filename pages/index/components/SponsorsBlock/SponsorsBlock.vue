<template>
  <div :id="type" class="sponsors-block section">
    <div class="container-fluid-1440">
      <div class="section__content">
        <sponsors :type="type"></sponsors>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Sponsors from '@/components/Sponsors'
import { defineComponent } from 'vue'
import { SponsorType } from '~/data/sponsors'

export default defineComponent({
  name: 'SponsorsBlock',
  components: { Sponsors },
  props: {
    type: { type: String as () => SponsorType, required: true }
  }

})
</script>
