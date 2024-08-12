<template>
    <div class="affiliate-card">
      <img
        v-if="affiliate.imgUrl"
        :src="affiliate.imgUrl"
        :alt="affiliate.descricao"
        class="affiliate-image"
      />
      <div v-else class="no-image">No Image Available</div>
      <div class="affiliate-details">
        <h3>{{ affiliate.descricao }}</h3>
        <p><strong>Empresa:</strong> {{ affiliate.empresa }}</p>
        <p><strong>Categoria:</strong> {{ affiliate.categoria }}</p>
        <p><strong>Data:</strong> {{ formattedDate }}</p>
        <p><strong>Valor:</strong> {{ formattedValor }}</p>
        <p><strong>Cupom:</strong> {{ affiliate.cupom }}</p>
        <a :href="affiliate.link" target="_blank" class="affiliate-link">
          Veja a oferta
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardAfiliados',
    props: {
      affiliate: {
        type: Object,
        required: true,
      },
    },
    computed: {
      formattedDate() {
        return new Date(this.affiliate.data).toLocaleDateString();
      },
      formattedValor() {
        return `$${this.affiliate.valor.toFixed(2)}`;
      },
    },
  };
  </script>
  
  <style scoped>
  .affiliate-card {
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin: 10px;
    max-width: 300px; /* Ajuste a largura máxima conforme necessário */
  }
  
  .affiliate-image {
    width: 100%;
    height: 100%;
    object-fit: cover;


  }
  
  .no-image {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    color: #888;
    font-size: 14px;
  }
  
  .affiliate-details {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .affiliate-details h3 {
    margin: 0 0 10px 0;
    font-size: 18px;
    color: #333;
  }
  
  .affiliate-details p {
    margin: 4px 0;
    font-size: 14px;
    color: #555;
  }
  
  .affiliate-link {
    margin-top: 10px;
    padding: 8px 12px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    text-align: center;
    border-radius: 4px;
    display: inline-block;
    font-size: 14px;
  }
  
  .affiliate-link:hover {
    background-color: #0056b3;
  }
  </style>
  