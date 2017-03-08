<template lang="html">
  <div class="">

    <div class="characters__item">
      <div class="characters__item--pic">
        <img :src="`${character.thumbnail.path}.${character.thumbnail.extension}`" alt="" class="characters__item--image">
      </div>
      <div class="characters__item--name">{{ character.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['character'],
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
