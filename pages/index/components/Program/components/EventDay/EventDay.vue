<template>
  <article class="event-day">
    <header class="event-day__header">
      <div v-if="day.description" class="event-day__description">
        {{ day.description }}
      </div>
    </header>


    <div class="event-day__tracks">
      <div class="grid-row">
        <div v-for="track in day.tracks" :class="['col-xs-12', day.tracks.length > 1 ? 'col-sm-6' : '']">
          <div class="event-day__track">
            <div class="event-day__track-name">
              {{ track.name || '&nbsp;' }}
            </div>
            <div class="schedule-list">
              <article
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
                    {{ item.title || item.type }}
                  </div>
                  <h6 class="schedule__speakers" v-if="item.speaker">
                    {{ item.speaker }}
                  </h6>
                </div>
              </article>
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
