<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <page-header
          :title="'Skills'"
          :summary="'A list of skills and my level of knowledge in them'"></page-header>
      </v-flex>
      <!-- <h2>Skills is currently a work in progress</h2> -->
      <v-flex
        xs12
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
  data() {
    return {
      skills: [
        {
          name: 'JavaScript',
          img: 'js.jpg',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          summary: 'I take pride in JavaScript being one of my strongest fields, I strive for clean and standardized JS practices.',
          versions: ['ES2014', 'ES2015', 'ES2016', 'ES2017'],
          level: 'Expert',
          libraries: [
            {
              name: 'Underscore',
              link: 'http://underscorejs.org/',
              img: 'underscore.png',
              summary: 'The underscore utility belt is one of my favorite libraries for JS',
              versions: ['All'],
              level: 'Expert'
            },
            {
              name: 'jQuery',
              link: 'https://jquery.com/',
              img: 'jquery.png',
              summary: 'All though I am not fond of it much today I understand the significance jQuery played in the realm of JavaScript for a long while, which I was also a part of.',
              versions: ['1.x', '3.x'],
              level: 'Professional'
            },
            {
              name: 'Ramda',
              link: 'http://ramdajs.com/',
              img: 'ramda.png',
              summary: 'Another library of pure functional operators for JavaScript that I am very fond of',
              versions: ['0.23.x', '0.24.x', '0.25.x'],
              level: 'Intermediate'
            }
          ],
          frameworks: [
            {
              name: 'Vue',
              link: 'https://vuejs.org/',
              type: 'Normal',
              img: 'vue.png',
              summary: 'Vue is my JS framework of choice for most if not all my projects, it\'s easy to use setup and data flow system make using it a pleasure.',
              versions: ['2.x'],
              level: 'Professional',
              libraries: [
                {
                  name: 'Vuex',
                  img: 'vue.png',
                  link: 'https://vuex.vuejs.org/',
                  summary: 'Vuex is a store like system for keeping data consistent and the flow manageable, think of redux if you are familiar with React',
                  versions: ['2.x'],
                  level: 'Professional'
                },
                {
                  name: 'Vue-Router',
                  link: 'https://router.vuejs.org/',
                  img: 'vue.png',
                  summary: 'A simple to setup and use routing system for vue js that I use in most of my current projects',
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
                }
              ]
            },
            {
              name: 'Nuxt',
              link: 'https://nuxtjs.org/',
              img: 'nuxt.jpg',
              summary: 'This is almost a clone of the Vue framework but it has a lot of the modules baked right in, and it\'s extremely good with SSR content.',
              versions: ['1.x'],
              level: 'Professional'
            }
          ]
        },
        {
          name: 'HTML',
          link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          img: 'html.png',
          summary: 'The skeleton to any web site or application it has become almost second nature to me',
          versions: ['HTML4', 'HTML5'],
          level: 'Expert'
        },
        {
          name: 'CSS',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          img: 'css.jpg',
          summary: 'CSS is the backbone to any sites style and theme which I have done a lot to become as skilled with it and I hope to continue expanding my abilities.',
          versions: ['CSS1', 'CSS2', 'CSS3'],
          level: 'Intermediate',
          frameworks: [
            {
              name: 'Bootstrap',
              link: 'http://getbootstrap.com/',
              img: 'bootstrap.png',
              summary: 'One of the Most used frameworks in the css realm',
              versions: ['v3', 'v4'],
              level: 'Professional'
            }
          ]
        },
        {
          name: 'Sass',
          link: 'http://sass-lang.com/',
          img: 'sass.png',
          summary: 'A pre compiled style of language for css that I became very fond of once I started using it. Sass is a lot like the Less pre compiled language of CSS so the knowledge traverses between the two fairly well.',
          versions: ['All'],
          level: 'Professional'
        },
        {
          name: 'Node.js',
          link: 'https://nodejs.org/',
          img: 'node.png',
          summary: 'I became facinated with Node once I learned about it and I like to think my abilities have grown largely and at a very fast pace.',
          versions: ['0.10.x', '0.12.x', '4.x', '6.x', '8.x'],
          level: 'Professional',
          frameworks: [
            {
              name: 'Hapi',
              link: 'https://hapijs.com/',
              img: 'hapi.png',
              type: 'HTTP',
              summary: 'Hapi.js is a http framework for node servers, it offers an extremely stable and easy to use system for your backend server.',
              versions: ['11.x', '12.x', '13.x', '14.x', '15.x', '16.x', '17.x'],
              level: 'Professional'
            },
            {
              name: 'Express',
              link: 'https://expressjs.com',
              type: 'HTTP',
              img: 'express.png',
              summary: 'Express is an http framework for node servers. It\'s very lightweight and pretty speedy for everything it is.',
              versions: ['2.x', '3.x', '4.x'],
              level: 'Intermediate'
            },
            {
              name: 'Koa',
              link: 'http://koajs.com/',
              img: 'koa.png',
              type: 'HTTP',
              summary: 'Koa is an http framework for node servers. It\'s another lightweight and extremely performant framework for server code.',
              versions: ['1.x', '2.x'],
              level: 'Intermediate'
            },
            {
              name: 'Tape',
              link: 'https://github.com/substack/tape',
              img: 'tape.png',
              type: 'Testing',
              summary: 'Tape is a testing framework for writing and maintaining unit tests',
              versions: ['Any'],
              level: 'Expert'
            },
            {
              name: 'Mocha',
              link: 'https://mochajs.org/',
              img: 'mocha.png',
              type: 'Testing',
              summary: 'Mocha is a popular testing suite for testing JavaScript code',
              versions: ['Any'],
              level: 'Intermediate'
            },
            {
              name: 'Ava',
              link: 'https://github.com/avajs/ava',
              type: 'Testing',
              img: 'ava.png',
              summary: 'Ava is a testing framework for writing and maintaining unit tests',
              versions: ['0.24.x', '0.25.x', '1.x'],
              level: 'Expert'
            }
          ],
          libraries: [
            {
              name: 'Webpack',
              link: 'https://webpack.js.org',
              img: 'webpack.png',
              summary: 'Webpack is a reliable and fairly large build tool for handling web application build processes.',
              versions: ['2.x', '3.x', '4.x'],
              level: 'Intermediate'
            },
            {
              name: 'Rollup',
              link: 'https://rollupjs.org/guide/en',
              img: 'rollup.jpg',
              summary: 'Rollup is a newer modern build tool that can easily work with current standard and modern JavaScripts for efficient and optimized builds, it\'s usually my go to tool for libraries.',
              versions: ['0.4X.x', '0.5X.x'],
              level: 'Intermediate'
            }
          ]
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
          name: 'Elm',
          link: 'http://elm-lang.org/',
          img: 'elm.png',
          summary: 'Elm is a language that compiles down to JS but has a strictly typed system built in and I fell in love with it after a friend showed it to me and I played around with it for a while. Though still a newbie to it I hope to practice it as much as I have practiced JavaScript itself.',
          versions: ['Latest'],
          level: 'Beginner'
        }
      ]
    };
  }
};
</script>

