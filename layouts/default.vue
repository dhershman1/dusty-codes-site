<template>
  <main class="wrapper">
    <v-app>
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
            :to="'/'"
            @click="navDrawer = false">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-group
            v-for="nav in navItems"
            :key="nav.title"
            v-model="nav.active"
            :prepend-icon="nav.icon"
            no-action>
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ nav.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              exact
              v-for="item in nav.items"
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
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <v-container grid-list-md fluid>
          <v-tooltip bottom>
            <v-btn
              fab
              dark
              fixed
              left
              top
              color="primary"
              @click="openNav"
              aria-label="Open Navigation Drawer"
              slot="activator">
              <v-icon>menu</v-icon>
            </v-btn>
            <span>Open Nav Drawer</span>
          </v-tooltip>
          <nuxt />
          <v-fab-transition>
            <v-tooltip top>
              <v-btn
                fab
                dark
                fixed
                right
                bottom
                color="primary"
                v-scroll="onScroll"
                v-show="fab"
                @click="toTop">
                <v-icon>keyboard_arrow_up</v-icon>
              </v-btn>
              <span>Back to top</span>
            </v-tooltip>
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
  </main>
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
          icon: 'pages',
          title: 'Portfolio',
          items: [
            {
              to: '/portfolio',
              icon: 'pages',
              title: 'Portal'
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
          ]
        },
        {
          icon: 'assignment',
          title: 'Documentation',
          items: [
            {
              title: 'Portal',
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
              title: 'Kyanite',
              to: '/documentation/kyanite',
              icon: 'extension'
            }
          ]
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
    },
    openNav() {
      this.navDrawer = !this.navDrawer;
      this.toTop();
    }
  }
};
</script>

<style>

.container {
  height: 100%
}

.wrapper {
  background: url(/background.png)
}

#app {
  background: rgba(43, 89, 148, 0.5) linear-gradient(143deg,
  rgba(54, 65, 86, 0.5), rgba(17, 75, 95, 0.5), rgba(43, 89, 148, 0.5));
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
</style>
