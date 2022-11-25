<script>
import {store} from '../assets/data/store'
import AppCard from './AppCard.vue'
export default {
  name: 'AppMain',
  components:{
    AppCard
  },
  data(){
    return{
      store
    }
  },
  props:{
    title: String,
    type: String
  }
}
</script>

<template>
  <h1 class="container">
      {{title}}
    </h1>

    <div class="container d-flex flex-wrap">

      <AppCard :card="card" v-for="card in store[type]" :key="card.id"/>
   
    </div>
</template>


<style lang="scss" scoped>
</style>