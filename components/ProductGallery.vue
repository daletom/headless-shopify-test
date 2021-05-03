<template>
  <ix-img
    :src="imageSrc()"
    width="380"
    height="380"
    :imgixParams="{fit:'fill', fill:'solid', fillcolor:'f7fafc', auto:'format'}"
    loading="lazy"
    fixed
  />  
</template>

<script>
export default {
  props: {
    imgobject: {
      type: Object,
      default: null
    },
    imgixParams: {
      type: String,
      default: null
    }
  },
  name: 'ProductGallery',
  methods: {
      imageSrc() {
          return (new URL(this.product.images[0].src)).pathname
      }
  }
}
</script>
