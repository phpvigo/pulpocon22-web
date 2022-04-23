<template>
  <article class="event-day">
    <header class="event-day__header">
      <div v-if="day.description" class="event-day__description">
        {{ day.description }}
      </div>
    </header>

    <aside>
      <ul class="event-day__legend">
        <li class="event-day__legend-item event-day__legend--talk">
          <span></span> Charla
        </li>
        <li class="event-day__legend-item event-day__legend--workshop">
          <span></span> Taller
        </li>
        <li class="event-day__legend-item event-day__legend--break">
          <span></span> Densanso
        </li>
      </ul>
    </aside>

    <div class="event-day__tracks">
      <div class="grid-row">
        <div v-for="track in day.tracks" :class="['col-xs-12', day.tracks.length > 1 ? 'col-sm-6' : '']">
          <div class="event-day__track">
            <div class="event-day__track-name">
              {{ track.name }}
            </div>
            <div class="schedule-list">
              <div
                  v-for="(item, index) in track.schedule"
                  :key="`${track.name}-${index}`"
                  :class="['schedule', `schedule--${item.type}`]"
              >
                <div class="schedule__time">
                  <i class="fa fa-clock"></i>
                  <div>
                    <span v-for="t in item.time" :key="`${track.name}-${t}`">{{ t }}</span>
                  </div>
                </div>
                <div class="schedule__details">
                  <div class="schedule__title">
                    {{ item.title }}
                  </div>
                  <ul class="schedule__speakers">
                    <li v-for="id in item.speakers" class="schedule__speaker">
                      <nuxt-link :to="`/ponente/${id}`">
                        {{ id }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ProgramDay } from '~/data/program'

export default defineComponent({
  name: 'EventDay',
  props: {
    day: { type: Object as () => ProgramDay, required: true }
  }
})
</script>
