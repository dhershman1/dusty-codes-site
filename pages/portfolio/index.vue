<template>
  <v-layout column>
    <v-flex class="page-header" text-xs-center>
      <h1 class="display-3">Dustin Hershman</h1>
      <h2>Full Stack Software Developer</h2>
      <v-tooltip bottom>
        <v-btn
          class="pa-2"
          color="secondary"
          large
          slot="activator"
          href="mailto:dustinh17@gmail.com">
          <span class="font-weight-bold headline">Contact Me</span>
        </v-btn>
        <span>Open email client to send an email</span>
      </v-tooltip>
    </v-flex>
    <v-layout wrap row>
      <v-flex
        xs12
        sm6
        md4
        v-for="(card, i) in cards"
        :key="i">
        <info-card
          :headline="card.title"
          :description="card.description"
          :dest="card.destination"
          :imgSrc="card.imgSrc">
        </info-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import infoCard from '../../components/info-card'

export default {
  components: {
    'info-card': infoCard
  },
  head: {
    title: 'Portfolio'
  },
  data () {
    return {
      gradient: 'to top right, rgba(63,81,181, .7), rgba(34,46,84, .7)',
      cards: [
        {
          title: 'Experience',
          description: 'View some of my current work experiences',
          destination: '/portfolio/experience',
          imgSrc: '/imgs/exp.jpg'
        },
        {
          title: 'Projects',
          description: 'Check out some of the projects and applications I\'ve built',
          destination: '/portfolio/projects',
          imgSrc: '/imgs/code.jpg'
        },
        {
          title: 'Skills',
          description: 'View and go over a lot of my skills and abilities as a developer',
          destination: '/portfolio/skills',
          imgSrc: '/imgs/skills.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.page-header {
  color: #fff;
}
</style>

