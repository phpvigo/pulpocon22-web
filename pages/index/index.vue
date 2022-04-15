<template>
  <home-hero></home-hero>
  <home-tickets></home-tickets>
  Sponsorization
  Location
  Schedule
  Speakers
  Supporters
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeHero from '~/pages/index/components/Hero'
import HomeTickets from '~/pages/index/components/Tickets'

export default defineComponent({
  name: 'Index',
  components: { HomeHero, HomeTickets }
})
</script>
