<template>
  <ContentDoc v-slot="{doc}">
    <article :class="['page-talk', 'page-simple', `page-talk--${doc.type}`]">
      <header class="page-talk__header page-talk__header">
        <div class="container-fluid-900">
          <div class="grid-row">
            <div class="page-talk__title-wrapper col-xs-12 col-sm-6 col-md-7">
              <h1 class="page-talk__title heading-2">{{ doc.title }}</h1>
              <ul class="page-talk__speakers">
                <li v-for="speaker in doc.speakers" :key="speaker">
                  <h2 class="heading-3">{{ speaker }}</h2>
                </li>
              </ul>
            </div>
            <div class="page-talk__image-wrapper col-xs-12 col-sm-6 col-md-5">
              <img :src="doc.image" :alt="doc.title" class="page-talk__image"/>
            </div>
          </div>
        </div>
      </header>
      <div class="page-simple__wrapper container-fluid-900">
        <ContentRenderer :value="doc"/>
      </div>
      <footer class="page-talk__footer">
        <nuxt-link to="/#program" class="btn">
          Programa
        </nuxt-link>

        <a v-if="config.ticketsUrl" :href="config.ticketsUrl" target="_blank" class="btn btn--red">
          Comprar entradas
        </a>
      </footer>
    </article>
  </ContentDoc>
</template>
<script lang="ts" setup>
import config from '@/data/config'
import './page-talk.scss'</script>
