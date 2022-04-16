<template>
  <section :class="['sponsors', sponsorTypeClasses]">
    <article v-for="sponsor in sponsors" :key="sponsor.name">
      <component :is="sponsor.link ? 'a' : 'span'" :href="sponsor.link" target="_blank">
        {{ sponsor.name }}
      </component>
    </article>
  </section>
</template>
<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'
import sponsors, { Sponsor, SponsorType } from '~/data/sponsors'

export default defineComponent({
  name: 'Sponsors',
  props: {
    type: { type: String as () => SponsorType, required: true }
  },
  setup(props) {
    const catSponsors: ComputedRef<Sponsor[]> = computed(() => sponsors[props.type] || [])

    return {
      catSponsors
    }
  }
})
</script>
