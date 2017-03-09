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
            <div class="comics">
              <comic-item v-for="item in comics" v-bind:comic="item" v-on:readmore="showModal"></comic-item>
            </div>
          </div>
        </div>
      </div><!--container-->
    </div><!--section-->
    <div class="modal" v-if="modal">
      <div class="modal__card">
        <button v-on:click="closeModal" >x</button>
        <p v-html="modal.description"></p>
      </div>
    </div>
  </div> <!--app-->
</template>

<script>
import store from '../store';
import { seriesInfoSearch, modalSet, modalClear } from '../actions';
import CharacterItem from './character-item.vue';
import ComicItem from './comic-item.vue';

export default {
  components: {
    CharacterItem,
    ComicItem
  },

  data() {
    return {
      seriesData: this.$select('seriesData'),
      characters: this.$select('characters'),
      comics: this.$select('comics'),
      modal: this.$select('modal'),
    };
  },

  mounted() {
    store.dispatch(seriesInfoSearch('Captain_America'));
  },

  methods: {
    showModal(data) {
      store.dispatch(modalSet(data));
    },

    closeModal() {
      store.dispatch(modalClear());
    },
  },
};
</script>
