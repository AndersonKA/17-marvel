<template lang="html">
  <div class="">
    <div class="comics__item">
      <div class="comics__item--pic">
        <img :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" alt="" class="comics__item--image">
      </div>
      <div class="comics__item--number">???</div>
      <div class="comics__item--name">{{ comic.name }}</div>
      <!--<div class="comics__item--stuff">
        <span class="comics__item--date"></span>
        <span class="comics__item--number"></span>
      </div>-->
      <button class="comics__read">Read More</button>

    </div>
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
