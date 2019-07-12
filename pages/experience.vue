<template>
  <section class="card__wrapper">
    <a-row class="card__row" v-for="(r, i) in list" :key="i" type="flex" :gutter="13">
      <skills class="skill-card" v-for="(s, i) in r" :info="s" :key="s.name" />
    </a-row>
  </section>
</template>

<script>
import { chunk } from 'kyanite'
import skills from '../assets/data/skills'
import skillCard from '../components/cards/skills'

export default {
  components: {
    skills: skillCard
  },

  data () {
    return {
      info: {
        skills
      }
    }
  },

  computed: {
    list () {
      return chunk(3, this.info.skills)
    }
  }
}
</script>

<style scoped>
.card__row {
  margin-bottom: 0.5rem;
}
</style>
