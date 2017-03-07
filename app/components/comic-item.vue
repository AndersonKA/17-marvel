<template lang="html">
  <div class="">
    <!--data.results[1].comics.items  v-for???-->
    <div class="comics__item">
      <div class="comics__item--pic">
        <img src="http://images.meredith.com/content/dam/bhg/Images/2012/11/28/405944_10150676681556019_1918501130_n.jpg.rendition.largest.ss.jpg" alt="" class="comics__item--image">
      </div>
      <div class="comics__item--number">#1</div>
      <div class="comics__item--name">Spider-Girl</div>
      <div class="comics__item--stuff">
        <span class="comics__item--date">(2010)</span>
        <span class="comics__item--number">#1</span>
      </div>
      <button class="comics__read">Read More</button>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
