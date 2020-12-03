<template>
  <div class="mt-3">
    <h1 class="text-4xl mb-4">Produits</h1>
    <div class="grid grid-cols-4 gap-4">
      <product-card
        v-for="(product, index) in products"
        :product="product"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
export default {
  components: {
    ProductCard,
  },

  data() {
    return {
      products: [],
    }
  },

  created() {
    this.fetchProducts()
  },

  methods: {
    async fetchProducts() {
      this.products = await this.$api.products.getAllProducts()
    },
  },
}
</script>
