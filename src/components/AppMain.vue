<script>

import { store } from '../data/store'
import AppCard from './AppCard.vue'

export default {
  name: 'AppMain',
  props:{
    title: String,
    type: String
  },
  components: {
    AppCard
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div class="container">
    <h2>{{title}}</h2>
  </div>

  <div class="container d-flex flex-wrap">
    <div 
    v-for="card in store[type]" :key="card.id"
    class="ap-card">
      dada
    </div>
  </div>
</template>

<style lang="scss">

  @use '../styles/general.scss' as *;

  .ap-card{
    background-color: yellow;
    width: 300px;
    height: 300px;
  }

</style>