<template>
  <div class="affiliate-grid">
    <CardAfiliados
      v-for="affiliate in affiliates"
      :key="affiliate.codigo"
      :affiliate="affiliate"
    />
  </div>
</template>

<script>
import CardAfiliados from './CardAfiliados.vue';

export default {
  name: 'AfiliadosGrid',
  components: {
    CardAfiliados,
  },
  props: {
    affiliates: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.affiliate-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
