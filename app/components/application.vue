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
              <div class="leftside--pic"><img :src="`${seriesData.thumbnail.path}.${seriesData.thumbnail.extension}`" alt="" class="leftside__pic--image"></div>
            </div>
            <div class="leftside__title">
              <span class="leftside__title--name">{{ seriesData.title }}</span>
            </div>

            <div class="leftside__dates">
              <span class="leftside__dates--start">{{ seriesData.startYear }} -</span>
              <span class="leftside__dates--end">{{ seriesData.endYear }}</span>
            </div>

            <h3 class="leftside__creator--heading">Creators</h3>
              <!--<song-item v-for="item in tracks" v-bind:track="item"></song-item>-->
            <div class="leftside__creator--names">{{ seriesData.creators.items[0].name }}</div>
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
      characterData: this.$select('characterData'),
      comicData: this.$select('comicData'),
    };
  },

  mounted() {
    store.dispatch(seriesInfoSearch('Spider-girl'));
  },
  methods: {

  },
};
</script>
