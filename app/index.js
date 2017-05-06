import Vue from 'vue'
import Navbar from './sections/Navbar.vue'
import Introduction from './sections/Introduction.vue'
import Skills from './sections/Skills.vue'
import Portfolio from './sections/Portfolio.vue'
import Social from './sections/Social.vue'
import './styles/style.scss'

new Vue({
  el: '#app',
  components: {
    Navbar,
    Introduction,
    Skills,
    Portfolio,
    Social
  }
})
