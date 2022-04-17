<template>
  <home-hero></home-hero>
  <sponsors-block :type="SponsorType.Diamond"></sponsors-block>
  <home-tickets></home-tickets>
  <home-venue></home-venue>
  <home-follow></home-follow>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SponsorType } from '~/data/sponsors'
import HomeFollow from '~/pages/index/components/Follow'
import HomeHero from '~/pages/index/components/Hero'
import SponsorsBlock from '~/pages/index/components/SponsorsBlock'
import HomeTickets from '~/pages/index/components/Tickets'
import HomeVenue from '~/pages/index/components/Venue'

export default defineComponent({
  name: 'Index',
  components: { HomeHero, HomeTickets, HomeFollow, HomeVenue, SponsorsBlock },
  setup() {
    return {
      SponsorType
    }
  }
})
</script>
