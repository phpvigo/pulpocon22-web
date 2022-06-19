<template>
  <section :class="['sps', sponsorTypeClasses]">
    <article v-for="sponsor in catSponsors" :key="sponsor.name">
      <component :is="sponsor.link ? 'a' : 'span'" :href="sponsor.link" class="sp" target="_blank">
        <img :alt="sponsor.name" :src="sponsor.logo"/>
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
  setup (props) {
    const catSponsors: ComputedRef<Sponsor[]> = computed(() => sponsors[props.type] || [])

    const sponsorTypeClasses: ComputedRef<string[]> = computed(() => {
      return [`sps--${props.type}`]
    })

    return {
      sponsors,
      sponsorTypeClasses,
      catSponsors
    }
  }
})
</script>
