<template>
  <div class="container">
    <div class="card cart-block">
      <div class="card-img">
        <img :src="imgSrc" class="card-img-top">
      </div>
      <div class="card-block">
        <h4 class="card-title">{{title}}</h4>
        <h5 class="card-subtitle">{{subtitle}}</h5>
        <p class="card-text">{{description}}</p>
        <div class="card-btn">
          <a :href="urlHref" target="_blank" class="btn btn-primary">MORE</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolio-item',
  props: ['title', 'subtitle', 'description', 'image', 'url'],
  computed: {
    imgSrc() {
      return this.image ? this.image : 'static/images/package.png'
    },
    urlHref() {
      return this.url ? this.url : '#'
    }
  }
}
</script>

<style lang="scss" src="../styles/portfolio-item.scss" scoped></style>
