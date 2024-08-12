<template>
    <div class="filter-bar">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search..."
        @input="onFilterChange"
      />
  
      <select v-model="selectedCategory" @change="onFilterChange">
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="home">Home</option>
      </select>
  
      <select v-model="selectedPriceRange" @change="onFilterChange">
        <option value="">All Prices</option>
        <option value="0-50">$0 - $50</option>
        <option value="51-100">$51 - $100</option>
        <option value="101-200">$101 - $200</option>
        <option value="200+">$200+</option>
      </select>
  
      <button @click="resetFilters">Reset Filters</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        selectedCategory: '',
        selectedPriceRange: ''
      };
    },
    methods: {
      onFilterChange() {
        // Aqui você pode emitir os filtros para o componente pai ou aplicar os filtros diretamente
        this.$emit('filter-change', {
          searchQuery: this.searchQuery,
          selectedCategory: this.selectedCategory,
          selectedPriceRange: this.selectedPriceRange
        });
      },
      resetFilters() {
        this.searchQuery = '';
        this.selectedCategory = '';
        this.selectedPriceRange = '';
        this.onFilterChange();
      }
    }
  };
  </script>
  
  <style scoped>
  .filter-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 5px;
  }
  
  input[type="text"] {
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ced4da;
    flex-grow: 1;
  }
  
  select {
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ced4da;
  }
  
  button {
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    background-color: #007BFF;
    color: #fff;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  