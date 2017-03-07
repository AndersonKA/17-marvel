<template lang="html">
  <div class="">
    <!--data.results[1].characters.items  v-for???-->
    <div class="characters__item">
      <div class="characters__item--pic">
        <img src="http://cdn2-www.dogtime.com/assets/uploads/2011/03/cute-dog-names.jpg" alt="" class="characters__item--image">
      </div>
      <div class="characters__item--name">Red Hulk</div>
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
