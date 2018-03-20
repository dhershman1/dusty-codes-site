<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <page-header
          :title="'Skills'"
          :summary="'A list of skills and my level of knowledge in them'"></page-header>
      </v-flex>
      <v-flex
        xs12
        md4
        v-for="s in skills"
        :key="s.name">
        <skill-card :info="s"></skill-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

/* eslint-disable max-len */

import pageHeader from '../../components/page-header';
import skillCard from '../../components/cards/skills';

export default {
  components: {
    'page-header': pageHeader,
    'skill-card': skillCard
  },
  head: {
    title: 'Skills'
  },
  data() {
    return {
      skills: [
        {
          name: 'Bootstrap',
          link: 'http://getbootstrap.com/',
          img: 'bootstrap.png',
          summary: 'One of the Most used frameworks in the css realm',
          versions: ['v3', 'v4'],
          level: 'Professional'
        },
        {
          name: 'CSS',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          img: 'css.jpg',
          summary: 'CSS is the backbone to any sites style and theme which I have done a lot to become as skilled with it and I hope to continue expanding my abilities.',
          versions: ['CSS1', 'CSS2', 'CSS3'],
          level: 'Intermediate'
        },
        {
          name: 'Elm',
          link: 'http://elm-lang.org/',
          img: 'elm.png',
          summary: 'Elm is a language that compiles down to JS but has a strictly typed system built in and I fell in love with it after a friend showed it to me and I played around with it for a while. Though still a newbie to it I hope to practice it as much as I have practiced JavaScript itself.',
          versions: ['Latest'],
          level: 'Novice'
        },
        {
          name: 'HTML',
          link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          img: 'html.png',
          summary: 'The skeleton to any web site or application it has become almost second nature to me',
          versions: ['HTML4', 'HTML5'],
          level: 'Professional'
        },
        {
          name: 'JavaScript',
          img: 'js.jpg',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          summary: 'I take pride in JavaScript being one of my strongest fields, I strive for clean and standardized JS practices.',
          versions: ['ES2015', 'ES2016', 'ES2017'],
          level: 'Expert'
        },
        {
          name: 'jQuery',
          link: 'https://jquery.com/',
          img: 'jquery.png',
          summary: 'A library for manipulating and expressing content to the DOM as well as using ajax',
          versions: ['1.x', '3.x'],
          level: 'Professional'
        },
        {
          name: 'JSON',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON',
          img: 'json.png',
          summary: 'I became fond of moving data around using JSON fairly quickly, it\'s easy and efficient!',
          versions: ['All'],
          level: 'Expert'
        },
        {
          name: 'Node.js',
          link: 'https://nodejs.org/',
          img: 'node.png',
          summary: 'I became facinated with Node once I learned about it and I like to think my abilities have grown largely and at a very fast pace.',
          versions: ['0.10.x', '0.12.x', '4.x', '6.x', '8.x'],
          level: 'Professional'
        },
        {
          name: 'Nuxt',
          link: 'https://nuxtjs.org/',
          img: 'nuxt.jpg',
          summary: 'This is almost a clone of the Vue framework but it has a lot of the modules baked right in, and it\'s extremely good with SSR content.',
          versions: ['1.x'],
          level: 'Professional'
        },
        {
          name: 'Ramda',
          link: 'http://ramdajs.com/',
          img: 'ramda.png',
          summary: 'Another library of pure functional operators for JavaScript that I am very fond of',
          versions: ['0.23.x', '0.24.x', '0.25.x'],
          level: 'Professional'
        },
        {
          name: 'Rollup',
          link: 'https://rollupjs.org/guide/en',
          img: 'rollup.jpg',
          summary: 'Rollup is a newer modern build tool that can easily work with current standard and modern JavaScripts for efficient and optimized builds, it\'s usually my go to tool for libraries.',
          versions: ['0.4X.x', '0.5X.x'],
          level: 'Professional'
        },
        {
          name: 'Sass',
          link: 'http://sass-lang.com/',
          img: 'sass.png',
          summary: 'A pre compiled style of language for css that I became very fond of once I started using it. Sass is a lot like the Less pre compiled language of CSS so the knowledge traverses between the two fairly well.',
          versions: ['All'],
          level: 'Intermediate'
        },
        {
          name: 'Underscore',
          link: 'http://underscorejs.org/',
          img: 'underscore.png',
          summary: 'The underscore utility belt is one of my favorite libraries for JS',
          versions: ['All'],
          level: 'Expert'
        },
        {
          name: 'Vue',
          link: 'https://vuejs.org/',
          type: 'Normal',
          img: 'vue.png',
          summary: 'Vue is my JS framework of choice for most if not all my projects, it\'s easy to use setup and data flow system make using it a pleasure.',
          versions: ['2.x'],
          level: 'Professional'
        },
        {
          name: 'Vuetify',
          link: 'https://vuetifyjs.com',
          img: 'v.png',
          summary: 'Vuetify is a style framework for Vue it is similar to googles material design with a lot of built in tools and components to use.',
          versions: ['0.x', '1.x'],
          level: 'Professional'
        },
        {
          name: 'Webpack',
          link: 'https://webpack.js.org',
          img: 'webpack.png',
          summary: 'Webpack is a reliable and fairly large build tool for handling web application build processes.',
          versions: ['2.x', '3.x', '4.x'],
          level: 'Intermediate'
        }
      ]
    };
  }
};
</script>

