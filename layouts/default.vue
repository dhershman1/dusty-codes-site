<template>
  <v-app>
    <link rel="stylesheet" href="/atom-one-dark.css">
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
              <v-list-tile-title>Portfolio</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile
          exact
          v-for="item in navItems.portfolio"
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
        <v-fab-transition>
          <v-btn
            fab
            dark
            fixed
            left
            top
            color="primary"
            @click="openNav"
            title="Open the Navigation Drawer">
            <v-icon>menu</v-icon>
          </v-btn>
        </v-fab-transition>
        <nuxt />
        <v-fab-transition>
          <v-btn
            fab
            dark
            fixed
            right
            bottom
            color="primary"
            v-scroll="onScroll"
            v-show="fab"
            @click="toTop"
            title="Back to top">
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
          }
        ],
        portfolio: [
          {
            title: 'Portfolio Home',
            to: '/portfolio',
            icon: 'pages'
          },
          {
            title: 'Experience',
            to: '/portfolio/experience',
            icon: 'done_all'
          },
          {
            title: 'Projects',
            to: '/portfolio/projects',
            icon: 'donut_large'
          },
          {
            title: 'Skills',
            to: '/portfolio/skills',
            icon: 'assessment'
          }
        ],
        documentation: [
          {
            title: 'Documentation Home',
            to: '/documentation',
            icon: 'assignment'
          },
          {
            title: 'Simply Valid',
            to: '/documentation/simply_valid',
            icon: 'question_answer'
          },
          {
            title: 'Simple Card',
            to: '/documentation/simple-card',
            icon: 'credit_card'
          },
          {
            title: 'Phone Fns',
            to: '/documentation/phone-fns',
            icon: 'contact_phone'
          },
          {
            title: 'Dusty Fns',
            to: '/documentation/dusty-fns',
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

#app {
  background: linear-gradient(143deg, #364156, #114b5f, #2b5994);
  background-size: 600% 600%;

  -webkit-animation: bganimate 31s ease infinite;
  -moz-animation: bganimate 31s ease infinite;
  animation: bganimate 31s ease infinite;
}

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

 @-webkit-keyframes bganimate {
    0%{background-position:20% 0%}
    50%{background-position:81% 100%}
    100%{background-position:20% 0%}
}
@-moz-keyframes bganimate {
    0%{background-position:20% 0%}
    50%{background-position:81% 100%}
    100%{background-position:20% 0%}
}
@keyframes bganimate {
    0%{background-position:20% 0%}
    50%{background-position:81% 100%}
    100%{background-position:20% 0%}
}
</style>
