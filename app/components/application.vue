<template lang="html">
  <div class="app">
    <div class="nav">
      <div class="logo container">Marvel</div>
    </div>
    <div class="section">
      <div class="container">
        <div class="stuff">
          <div v-if="seriesData" class="seriesInfo left-side">
            <aside class="leftside">
              <div class="leftside__pic">
                <img :src="`${seriesData.thumbnail.path}.${seriesData.thumbnail.extension}`" alt="" class="leftside--pic">
              </div>
              <div class="leftside__title">
                <span class="leftside__title--name">{{ seriesData.title }}</span>
              </div>

              <div class="leftside__dates">
                <span class="leftside__dates--start">{{ seriesData.startYear }} -</span>
                <span class="leftside__dates--end">{{ seriesData.endYear }}</span>
              </div>

              <h3 class="leftside__creator--heading">Creators</h3>

              <div class="leftside__creator--names" v-for="creator in seriesData.creators.items">{{ creator.name }}</div>
            </aside>
            <!--end of left-side-->
          </div>

          <div class="rightside">
            <div class="characters__words">Characters</div>

            <div class="characters">
              <character-item v-for="item in characters" v-bind:character="item"></character-item>
            </div>

            <div class="comics__words">Comics</div>
            <div class="comics"></div>
          </div>
        </div>
      </div><!--container-->
    </div><!--section-->
  </div> <!--app-->
  <!--<div class="open_modal" v-if="showModal">
    <div class="modal">
    <button v-on:click ???
  class="comics__popup">lorem</div>-->
</template>

<script>
  import store from '../store';
  import { seriesInfoSearch } from '../actions';
  import CharacterItem from './character-item.vue';
  import { comicsItem } from './comic-item.vue';


  export default {
    components: {
      CharacterItem
    },

    data() {
      return {
        seriesData: this.$select('seriesData'),
        characters: this.$select('characters'),
        comics: this.$select('comics'),
      };
    },

    mounted() {
      store.dispatch(seriesInfoSearch('Spider-girl'));

    },
    methods: {
      // modal() {
      // this.showModal = true;
      // },

      // close() {
      // this.showModal = false;
      // },
    },
  };
</script>
