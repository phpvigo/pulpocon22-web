<template>
  <section id="program" class="home-program section section--white">
    <div class="container-fluid-1440">
      <sponsors show-title :type="SponsorType.Gold"></sponsors>
    </div>
    <div class="container-fluid-900">
      <header class="section__header">
        <h2 class="section__title">
          Programa
        </h2>
      </header>
      <div class="section__content">
        <article :class="['program-day', `program-day--${id}`]" v-for="(eventDay, id) in program" :key="id">
          <h3 class="program-day__title heading-4">{{ eventDay.title }}</h3>
          <event-day :day="eventDay"/>
        </article>
      </div>

      <div class="container-fluid-1440">
        <sponsors class="mb-3" show-title :type="SponsorType.Bronze"></sponsors>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import program from '@/data/program'
import { defineComponent } from 'vue'
import Sponsors from '~/components/Sps'
import { SponsorType } from '~/data/sponsors'
import EventDay from '~/pages/index/components/Program/components/EventDay'

export default defineComponent({
  name: 'Program',
  ssr: false,
  components: {
    EventDay,
    Sponsors
  },
  setup () {
    return {
      program,
      SponsorType
    }
  }
})
</script>
