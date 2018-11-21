<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex class="page-header" xs12 text-xs-center>
        <h1 class="display-3">{{ title }}</h1>
        <h2 v-if="summary">
          {{ summary }}
        </h2>
      </v-flex>
    </v-layout>
    <v-layout :column="$route.params.section !== 'skills'" wrap>
      <v-flex
        xs12
        md4
        v-for="(s, i) in list"
        :key="i">
        <component :is="$route.params.section" :info="s"></component>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { capitalize } from 'kyanite'
import expCard from '../../components/cards/exp'
import skillCard from '../../components/cards/skills'
import projCard from '../../components/cards/project'
import experience from './data/experience'
import projects from './data/projects'
import skills from './data/skills'

export default {
  components: {
    experience: expCard,
    projects: projCard,
    skills: skillCard
  },

  head () {
    return {
      title: `Portfolio - ${capitalize(this.$route.params.section)}`
    }
  },

  validate ({ params }) {
    const valid = ['skills', 'experience', 'projects']

    return valid.includes(params.section)
  },

  data () {
    return {
      info: {
        experience,
        projects,
        skills
      }
    }
  },

  computed: {
    title () {
      return capitalize(this.$route.params.section)
    },
    summary () {
      const summaries = {
        skills: 'A List of technologies and skills I try to use in my day to day',
        experience: 'Some of my personal experiences as a developer',
        projects: 'A list of projects that I\'ve worked on'
      }

      return summaries[this.$route.params.section]
    },
    list () {
      console.log(this.info[this.$route.params.section])
      return this.info[this.$route.params.section]
    }
  }
}
</script>

<style scoped>
.page-header {
  color: #fff;
}
</style>

