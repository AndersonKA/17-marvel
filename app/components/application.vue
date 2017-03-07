<template lang="html">
  <div class="app">
    <div class="nav">
      <span class="logo">Marvel</span>

    </div>
      <div class="section">
        <div class="container">
          <div class="stuff">
            <left-side v-if="seriesData" class="seriesInfo">
          <aside class="leftside">
            <div class="leftside__pic">
              <img :src="`${seriesData.thumbnail.path}.${seriesData.thumbnail.extension}`" alt="" class="leftside__pic--image">
            </div>
            <div class="leftside__title">
              <!--{{data.results[0].title}}-->
              <span class="leftside__title--name">{{ seriesData.title }}</span>
            </div>

            <div class="leftside__dates">
              <!--data.results[1].startYear-->
              <span class="leftside__dates--start">2010</span>
              <!--data.results[1].endYear-->
              <span class="leftside__dates--end">2011</span>
            </div>

            <h3 class="leftside__creator--heading">Creators</h3>
            <!--data.results[1].creators.items  v-for???-->
            <div class="leftside__creator--names">Tom Brennan</div>
          </aside> <!--end of left-side-->
          </left-side>

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
  // need to change this
  <!--<div v-for:"seriesInfo" class="comics__popup">lorem</div>-->
</template>

<script>
import store from '../store';
import { seriesInfoSearch } from '../actions';
import { comicsItem } from './comic-item.vue';
import { charactersItem } from './character-item.vue';

export default {
  data() {
    return {
      seriesData: this.$select('seriesData'),
      characterData: this.$select('characterInfo'),
      comicData: this.$select('comicInfo'),
    };
  },

  created() {
    store.dispatch(seriesInfoSearch('Hulk'));
  },
  methods: {

  },
};
</script>
