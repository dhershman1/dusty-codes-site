<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <page-header
          :title="'Projects'"
          :summary="'This is a list of some of the projects I\'ve worked on'"></page-header>
      </v-flex>
      <v-flex
        xs12
        v-for="p in projects"
        :key="p.name">
        <project-card :info="p"></project-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import pageHeader from '../../components/page-header'
import projCard from '../../components/cards/project'

export default {
  components: {
    'page-header': pageHeader,
    'project-card': projCard
  },
  head: {
    title: 'Projects'
  },
  data () {
    return {
      projects: [
        {
          name: 'Dusty Codes',
          imageName: 'imgs/code.jpg',
          stack: 'Web Portfolio & Documentation App',
          summary: 'This current web page',
          description: 'This is an app that both shares my portfolio info as well as Documentation for my modules',
          technologies: [
            {
              name: 'Vue.js',
              link: 'https://vuejs.org/'
            },
            {
              name: 'Nuxt.js',
              link: 'https://nuxtjs.org/'
            },
            {
              name: 'Vuetify',
              link: 'https://vuetifyjs.com/'
            },
            {
              name: 'Node.js',
              link: 'https://nodejs.org/'
            }
          ]
        },
        {
          name: 'OTS 3.0',
          imageName: 'imgs/vw.png',
          stack: 'Online Tire Store for multiple OEMs',
          summary: 'This current web page',
          description: 'A online store for dealership OEMs under multiple skins (The preview is VW)',
          link: 'https://www.vwtirestore.com/',
          technologies: [
            {
              name: 'Vue.js',
              link: 'https://vuejs.org/'
            },
            {
              name: 'Vuex',
              link: 'https://vuex.vuejs.org/en/'
            },
            {
              name: 'Vue-Router',
              link: 'https://router.vuejs.org/en/'
            },
            {
              name: 'Bootstrap 4',
              link: 'https://getbootstrap.com/'
            },
            {
              name: 'Sass (SCSS)',
              link: 'https://sass-lang.com/'
            },
            {
              name: 'Nginx',
              linke: 'https://www.nginx.com/'
            },
            {
              name: 'Node.js',
              link: 'https://nodejs.org/'
            },
            {
              name: 'Webpack',
              link: 'https://webpack.js.org/'
            }
          ]
        },
        {
          name: 'Kyanite',
          imageName: 'imgs/logo.png',
          stack: 'JavaScript Pure Functional Library',
          summary: 'A library of single type pure functions',
          description: 'Utility library containing pure functions that focus on working with single type values',
          link: '/kyanite',
          technologies: [
            {
              name: 'JavaScript ES2015 & ES2016',
              link: 'http://www.ecma-international.org/ecma-262/6.0/'
            }
          ]
        },
        {
          name: 'Phone-Fns',
          imageName: 'imgs/logo.png',
          stack: 'JavaScript Library',
          summary: 'A functional JavaScript Library',
          description: 'A library of functional helpers for handling and manipulating phone numbers',
          link: '/phone-fns',
          technologies: [
            {
              name: 'JavaScript ES2015 & ES2016',
              link: 'http://www.ecma-international.org/ecma-262/6.0/'
            }
          ]
        }
      ]
    }
  }
}
</script>

