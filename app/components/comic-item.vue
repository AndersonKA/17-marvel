<template lang="html">
  <div class="comics__item">
    <div class="comics__item--pic">
      <img :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" alt="" class="comics__item--image">
    </div>
    <div class="comics__item--number"> #{{ comic.issueNumber }} </div>
    <div class="comics__item--name">{{ comic.title }}</div>
    <button class="comics__read" @click="$emit('readmore', comic)">Read More</button>

  </div>
</template>

<script>
export default {
  props: ['comic'],
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
