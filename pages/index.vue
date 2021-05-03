<template>
  <div>
    <div class="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      <div v-for="product in products" :key="product.id" v-bind:product="product" class="border rounded-lg bg-gray-100 hover:shadow-lg">
        <productWidget :product="product"></productWidget>
      </div>
    </div>
    <ul class="mt-4 text-center">
      <li v-for="product in products" :key="product.id">
        {{ product.images[0].src }}
      </li>
    </ul>
  </div>
</template>

<script>
import ProductWidget from '~/components/ProductWidget.vue'
import ProductGallery from '~/components/ProductGallery.vue'

export default {
  name: "IndexPage",
  components: {
    ProductWidget,
    ProductGallery
  },
  async asyncData({ $shopify, params }) {
    const products = await $shopify.product.fetchAll();
    return { products };
  },
  /*methods: {
    selectImage() {
    let primaryImage = products;
    console.log(primaryImage.images[0].src);
    return selectImage();
    }
  }*/
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
