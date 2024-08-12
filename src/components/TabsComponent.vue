<template>
    <v-tabs v-model="selectedTab">
      <v-tab v-for="(value, key) in categorias" :key="key">
        {{ key }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="selectedTab">
      <v-tab-item v-for="(value, key) in categorias" :key="key">
        <div class="card-container">
          <card-afiliados
            v-for="afiliado in getAfiliadosByCategory(key)"
            :key="afiliado.codigo"
            :model="afiliado"
          />
        </div>
      </v-tab-item>
    </v-tabs-items>
  </template>
  
  <script>
  import CardAfiliados from './CardAfiliados.vue';
  
  export default {
    components: { CardAfiliados },
    data() {
      return {
        selectedTab: 0,
        categorias: {
          "Todos": "todos",
          "Categoria 1": "categoria1",
          // Adicione mais categorias
        },
        afiliados: [] // Popule com os dados dos afiliados
      }
    },
    methods: {
      getAfiliadosByCategory(category) {
        if (category === 'todos') return this.afiliados;
        return this.afiliados.filter(a => a.categoria === category);
      }
    }
  }
  </script>
  
  <style scoped>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  </style>
  