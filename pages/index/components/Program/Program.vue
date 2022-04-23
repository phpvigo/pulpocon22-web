<template>
  <section id="program" class="home-program section section--white section--bg-200">
    <div class="container-fluid-900">
      <header class="section_header">
        <h2 class="section__title">
          Programa
        </h2>
      </header>
      <div class="section__content">
        <tabs :options="{ useUrlFragment: false, defaultTabHash: 'dia-3'  }">
          <tab v-for="(eventDay, id) in program" :id="id" :key="id" :name="eventDay.title">
            <event-day :day="eventDay"/>
          </tab>
        </tabs>


      </div>
    </div>

  </section>
</template>
<script lang="ts">
import program from '@/data/program'
import { defineComponent } from 'vue'
import EventDay from '~/pages/index/components/Program/components/EventDay'

export default defineComponent({
  name: 'Program',
  components: { EventDay },
  setup() {
    return {
      program
    }
  }
})
</script>
