<script setup>
import HomePage from './components/HomePage.vue';
import { Afiliados } from './model/ClasseAfiliados';

// Exemplo de uso da classe Afiliados
const teste = Array.from({ length: 3 }, (v, index) =>
  new Afiliados({
    codigo: index.toString(),
    descricao: 'Apple iPhone 14 (128 GB) – (PRODUCT) RED',
    data: '2024-06-24',
    valor: 3899,
    link: 'https://amzn.to/45Cu7ns',
    empresa: 'Amazon',
    cupom: '',
    img: '',
    imgUrl: 'https://m.media-amazon.com/images/I/51rAZ-7IQcL._AC_SX522_.jpg',
    categoria: 'Teste'
  })
);

console.log(teste);

</script>


<template>
  <HomePage />

</template>

<style scoped></style>