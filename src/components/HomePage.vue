<template>
    <div id="app">
      <HeaderWidget />
      <FilterBar />
      <AfiliadosGrid :affiliates="affiliateList" />
    </div>
  </template>
  
  <script>
  import HeaderWidget from './HeaderWidget.vue';
  import FilterBar from './FilterBar.vue';
  import AfiliadosGrid from './AfiliadosGrid.vue';
  import { Afiliados } from '../model/ClasseAfiliados.js';
  
  export default {
    components: {
      HeaderWidget,
      FilterBar,
      AfiliadosGrid
    },
    data() {
      return {
        affiliateList: Array.from({ length: 3 }, (v, index) =>
          new Afiliados({
            codigo: index.toString(),
            descricao: 'Apple iPhone 14 (128 GB) – (PRODUCT) RED',
            data: '2024-06-24',
            valor: 3899,
            link: 'https://amzn.to/45Cu7ns',
            empresa: 'Amazon',
            cupom: '',
            imgUrl: 'https://m.media-amazon.com/images/I/51rAZ-7IQcL._AC_SX522_.jpg',
            categoria: 'Teste'
          })
        )
      };
    },
  }
  </script>
<style scoped>
.home-page {
    background-color: #fff8e1;
    /* Cor similar ao Flutter */
}
</style>