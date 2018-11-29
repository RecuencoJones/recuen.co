<template>
  <section class="mbr-section mbr-section-md-padding"
           id="social-links">

    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2 text-xs-center">
          <h3 class="mbr-section-title display-2">
            Find me...
          </h3>
          <div>
            <social-icon v-for="(item, index) in sites"
                         :key="index"
                         :title="item.title"
                         :url="item.url"
                         :icon="item.icon"
                         :skip-blank="item.skipBlank">
            </social-icon>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="mbr-table-md-up">
          <div class="mbr-table-cell mbr-valign-top col-md-12 footer-logo">
            <div class="mbr-figure"><img src="images/logo.png"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {social} from '../constants/social'
import SocialIcon from '../components/SocialIcon.vue'

export default {
  name: 'social',
  data() {
    return {
      sites: social
    }
  },
  components: {
    SocialIcon
  }
}
</script>

<style lang="scss" src="../styles/social.scss" scoped></style>
