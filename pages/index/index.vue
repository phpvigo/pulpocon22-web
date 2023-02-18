<template>
  <div class="home">
    <home-hero></home-hero>
<!--    <home-tickets></home-tickets>-->
    <home-program></home-program>
    <home-venue></home-venue>
    <home-follow></home-follow>
    <home2019></home2019>
  </div>
</template>

<script lang="ts">
import { useHead } from '@vueuse/head'
import { defineComponent } from 'vue'
import { SponsorType } from '~/data/sponsors'
import HomeFollow from '~/pages/index/components/Follow'
import HomeHero from '~/pages/index/components/Hero'
import Home2019 from '~/pages/index/components/Home2019'
import HomeProgram from '~/pages/index/components/Program'
import SponsorsBlock from '~/pages/index/components/SponsorsBlock'
import HomeTickets from '~/pages/index/components/Tickets'
import HomeVenue from '~/pages/index/components/Venue'

export default defineComponent({
  name: 'Index',
  components: { HomeHero, HomeTickets, HomeFollow, HomeVenue, SponsorsBlock, HomeProgram, Home2019 },
  setup () {
    useHead({
      bodyAttrs: {
        class: 'home'
      }
    })

    return {
      SponsorType
    }
  }
})
</script>
