<template>
<div>
    <div class="m-6 grid grid-cols-1 2col:grid-cols-2 3col:grid-cols-3 gap-4">
      <div v-for="product in products" :key="product.id" v-bind:product="product" class="border rounded-lg bg-gray-100 hover:shadow-lg">
          <img class="rounded-t-lg bg-grey pt-2 pb-2" :src="product.images[0].src" />
          <div class="pl-4 pr-4 pb-4 pt-4 rounded-lg">
      <h4 class="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
        {{ product.title }}
      </h4>
      <div class="mt-1 text-sm text-gray-700">{{ product.description }}</div>
    </div>
    </div>
    </div>
</div>
</template>

<script>
    export default {
         name: "UnOptPage",
         async asyncData({ $shopify, params }) {
    const products = await $shopify.product.fetchAll();
    return { products };
  },
    }
</script>
