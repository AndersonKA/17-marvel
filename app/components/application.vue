<template lang="html">
  <div class="app">
    <div class="nav">
      <span class="logo">Marvel</span>
      <span><input type="search" placeholder="search..." class="nav-form"></span>
    </div>
      <div class="section">
        <div class="container">
          <div class="stuff">
          <aside class="leftside">
            <div class="leftside__pic">
              <img src="http://www.beaconsinn.com/images/www.onthespot.co.uk/wp-content/uploads/2015/08/cute-dog-pictures-for-kids.jpg" alt="" class="leftside__pic--image">
            </div>
            <div class="leftside__title">
              <span class="leftside__title--name">Spider-Girl</span>
              <span class="leftside__title--date">(2010-2011)</span>
            </div>

            <div class="leftside__dates">2010 - 2011</div>

            <h3 class="leftside__creator--heading">Creators</h3>
            <div class="leftside__creator--names">Tom Brennan</div>
          </aside> <!--end of left-side-->

          <div class="rightside">
            <div class="characters__words">Characters</div>
              <div class="characters">

              </div>

            <div class="comics__words">Comics</div>
              <div class="comics">

              </div>


            </div>


          </div>
        </div> <!--container-->
      </div> <!--section-->
  </div> <!--app-->
  <div class="comics__popup">lorem</div>
</template>

<script>
import store from '../store';
// import { seriesInfoSearch } from '../actions';
// import { comicsItem } from './comic-item.vue';
// import { charactersItem } from './character-item.vue';

export default {
  data() {
    return {
      series: this.$select('series'),
      characters: this.$select('characters'),
      comics: this.$select('comics'),
    };
  },

  created() {
    store.dispatch(seriesInfoSearch());
  },
  methods: {

  },
};
</script>
