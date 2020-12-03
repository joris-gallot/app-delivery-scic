<template>
  <div
    class="shadow-md p-3 hover:shadow-lg transition duration-200 ease-in-out rounded-xl border space-y-1"
  >
    <span class="text-xl font-semibold">{{ product.name }}</span>
    <p class="product-description">
      {{ product.description }}
    </p>
    <div class="flex items-center justify-between">
      <div>
        Détail
      </div>

      <font-awesome-icon
        :icon="['far', 'heart']"
        class="cursor-pointer"
        @click="addToFavorite"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  methods: {
    addToFavorite() {
      console.log('addToFavorite')
    },
  },
}
</script>

<style lang="css">
.product-description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
