<template>
  <v-app>
    <link rel="stylesheet" href="/atom-one-dark.css">
    <v-toolbar
      fixed
      light
      app>
      <v-toolbar-side-icon @click="openNav"></v-toolbar-side-icon>
      <v-toolbar-title class="mr-1" v-text="title" />
    </v-toolbar>
    <v-navigation-drawer
      temporary
      absolute
      v-model="navDrawer">
      <v-toolbar
        flat
        light
        class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Main</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile
          exact
          v-for="item in navItems.main"
          :key="item.title"
          :to="item.to"
          @click="navDrawer = false">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-toolbar
        flat
        light
        class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Documentation</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile
          exact
          v-for="item in navItems.documentation"
          :key="item.title"
          :to="item.to"
          @click="navDrawer = false">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
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
      navItems: {
        main: [
          {
            title: 'Home',
            to: '/',
            icon: 'dashboard'
          },
          {
            title: 'Portfolio',
            to: '/portfolio',
            icon: 'pages'
          }
        ],
        documentation: [
          {
            title: 'Simply Valid',
            to: '/simply_valid',
            icon: 'question_answer'
          },
          {
            title: 'Simple Card',
            to: '/simple-card',
            icon: 'credit_card'
          },
          {
            title: 'Phone Fns',
            to: '/phone-fns',
            icon: 'contact_phone'
          },
          {
            title: 'Dusty Fns',
            to: '/dusty-fns',
            icon: 'extension'
          }
        ]
      }
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
    },
    openNav() {
      this.navDrawer = !this.navDrawer;
      this.toTop();
    }
  }
};
</script>

<style>

.nav-fixed {
  position: 'fixed';
}

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
