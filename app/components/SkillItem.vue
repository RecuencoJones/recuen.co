<template>
  <div class="container">
    <div class="card cart-block">
      <div class="card-img iconbox">
        <span class="mbr-iconfont mbr-iconfont-features7"
              :class="icon">
        </span>
      </div>
      <div class="card-block">
        <h4 class="card-title">{{title}}</h4>
        <p class="card-text">
          <span v-for="text in description">
            {{text}}
            <br>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import isArray from 'lodash/isArray'

export default {
  name: 'skill-item',
  props: ['title', 'text', 'icon'],
  computed: {
    description() {
      return isArray(this.text) ? this.text : [this.text]
    }
  }
}
</script>

<style scoped>
  .mbr-iconfont {
    color: #ffffff;
  }
</style>
