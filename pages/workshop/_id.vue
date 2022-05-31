<template>
  <article class="speaker">
    <header class="speaker__header">
      <h1 class="speaker__name">
        {{ speaker.name }}
      </h1>
      <h3 class="speaker__position">
        {{ speaker.position }}
      </h3>

      <img :alt="speaker.name" :src="speaker.picture"/>
    </header>
  </article>
</template>
<script lang="ts">

</script>
