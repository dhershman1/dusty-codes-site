<template>
  <v-app>
    <link rel="stylesheet" href="/atom-one-dark.css">
    <v-toolbar
      fixed
      light
      app>
      <v-toolbar-side-icon @click="navDrawer = !navDrawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="mr-1" v-text="title" />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          exact
          :to="'/'">
          Home
        </v-btn>
        <v-btn
          flat
          exact
          :to="'/portfolio'">
          Portfolio
        </v-btn>
        <v-btn
          flat
          exact
          :to="'/simply_valid'">
          Simply Valid
        </v-btn>
        <v-btn
          flat
          :to="'/simple-card'">
          Simple Card
        </v-btn>
        <v-btn
          flat
          :to="'/phone-fns'">
          Phone Fns
        </v-btn>
        <v-btn
          flat
          :to="'/dusty-fns'">
          Dusty Fns
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      temporary
      absolute
      v-model="navDrawer"
      class="hidden-md-and-up">
      <v-list>
        <v-list-tile
          exact
          v-for="item in navItems"
          :key="item. title"
          :to="item.to"
          @click="navDrawer = false">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.description }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container grid-list-md fluid>
        <nuxt />
        <v-fab-transition>
          <v-btn
            fab
            dark
            fixed
            right
            bottom
            color="indigo"
            v-scroll="onScroll"
            v-show="fab"
            @click="toTop">
            <v-icon>keyboard_arrow_up</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-container>
    </v-content>
    <v-footer app>
      <span>Dustin Hershman &copy; 2018 Built using
        <a href="https://nuxtjs.org/" target="_blank">Nuxt</a> and
        <a href="https://vuetifyjs.com" target="_blank">Vuetify</a>
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fab: false,
      title: 'Dusty Codes',
      navDrawer: false,
      navItems: [
        {
          title: 'Home',
          to: '/',
          description: 'Go back to the home page'
        },
        {
          title: 'Portfolio',
          to: '/portfolio',
          description: 'Go to the Portfolio page'
        },
        {
          title: 'Simply Valid',
          to: '/simply_valid',
          description: 'A simple data driven validation library'
        },
        {
          title: 'Simple Card',
          to: '/simple-card',
          description: 'A simple luhn credit card validation module'
        },
        {
          title: 'Phone Fns',
          to: '/phone-fns',
          description: 'A small set of phone helper functions'
        },
        {
          title: 'Dusty Fns',
          to: '/dusty-fns',
          description: 'A small library of functional helpers'
        }
      ]
    };
  },
  methods: {
    onScroll() { // eslint-disable-line complexity
      if (typeof window === 'undefined') {
        return false;
      }

      const top = window.pageYOffset || document.documentElement.offsetTop || 0;

      this.fab = top > 300;

      return false;
    },
    toTop() {
      this.$router.push({hash: ''});
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style>

.title-btn {
  font-size: 20px;
  height: 100%;
  margin: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
