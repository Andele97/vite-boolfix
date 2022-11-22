import { reactive } from 'vue';

export const store = reactive ({
  apiUrl: 'https://api.themoviedb.org/3/search/',
  tv: [],
  movie: [],
  apiParams: {
    api_key: 'c32077f758fd2d7190cab6b992d40e54',
    query: 'matrix',
    language: 'it-IT'
  }
})