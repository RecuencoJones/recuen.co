<template>
  <section class="mbr-cards"
           id="skills"
           style="background-color: rgb(255, 255, 255);">
    <div class="mbr-cards-row row">
      <div v-for="item in skills"
           class="mbr-cards-col col-xs-12 col-lg-2"
           style="padding-top: 40px; padding-bottom: 40px;">
        <skill-item :title="item.title"
                    :text="item.text"
                    :icon="item.icon">
        </skill-item>
      </div>
    </div>
  </section>
</template>

<script>
import {skills} from '../constants/skills'
import SkillItem from '../components/SkillItem.vue'

export default {
  name: 'skills',
  data() {
    return {
      skills
    }
  },
  components: {
    SkillItem
  }
}
</script>
