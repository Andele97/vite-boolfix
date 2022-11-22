<script>
import axios from 'axios';
import { store } from './data/store';

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  name: 'App',
  data(){
    return{
      store
    }
  },
  components: {
    AppHeader,
    AppMain
  },
  methods:{
    getApi(type){
      axios.get(store.apiUrl + type, {params: store.apiParams})
      .then(res =>{
        store[type] = res.data.results;
      })
      .catch(err =>{

      })
    }
  },
  mounted(){
    this.getApi('movie')
    this.getApi('tv')
  }
}
</script>

<template>
  <AppHeader />
  <AppMain title="Film" type="movie"/>
  <AppMain title="Serie Tv" type="tv"/>
</template>

<style lang="scss">

 @use './styles/general.scss' as *;

</style>