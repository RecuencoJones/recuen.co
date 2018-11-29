<template>
  <a class="btn btn-social"
     :title="title"
     :target="skipBlank ? '_self' : '_blank'"
     :href="url">
    <i :class="icon"></i>
  </a>
</template>

<script>
export default {
  name: 'social-icon',
  props: ['title', 'url', 'icon', 'skipBlank']
}
</script>

<style scoped>
  .btn-social i {
    line-height: initial;
  }
</style>
