<template>
  <section class="mbr-cards"
           id="portfolio"
           style="background-color: rgb(239, 239, 239);">
    <div v-for="row in portfolio"
         class="mbr-cards-row row">
      <div v-for="item in row"
           class="mbr-cards-col col-xs-12 col-lg-3"
           style="padding-top: 40px; padding-bottom: 40px;">
        <portfolio-item :title="item.title"
                        :subtitle="item.subtitle"
                        :description="item.description"
                        :url="item.url"
                        :image="item.image">
        </portfolio-item>
      </div>
    </div>
  </section>
</template>

<script>
import chunk from 'lodash/chunk'
import {portfolio} from '../constants/portfolio'
import PortfolioItem from '../components/PortfolioItem.vue'

export default {
  name: 'portfolio',
  data() {
    return {
      portfolio: chunk(portfolio, 4)
    }
  },
  components: {
    PortfolioItem
  }
}
</script>

<style lang="scss" src="../styles/portfolio.scss" scoped></style>
