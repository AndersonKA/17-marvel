<template lang="html">
  <div class="">

    <div class="characters__item">
      <div class="characters__item--pic">
        <!--<img :src="`{$character.thumbnail.path}.${character.thumnail.extension}`" alt="" class="characters__item--image">-->
      </div>
      <div class="characters__item--name">{{ characterData.characters[0].items }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
