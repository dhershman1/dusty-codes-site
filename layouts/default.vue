<template>
  <v-app>
    <link rel="stylesheet" href="/atom-one-dark.css">
    <v-toolbar
      fixed
      light
      app>
      <v-toolbar-title class="mr-1 hidden-sm-and-down" v-text="title" />
      <v-toolbar-items>
        <v-btn
          flat
          exact
          :to="'/'"
        >
          Home
        </v-btn>
        <!-- <v-btn
          flat
          :to="'/simply-valid'"
        >
          Simply Valid
        </v-btn>
        <v-btn
          flat
          :to="'/simple-card'"
        >
          Simple Card
        </v-btn> -->
        <v-btn
          flat
          :to="'/phone-fns'"
        >
          Phone Fns
        </v-btn>
        <v-btn
          flat
          :to="'/dusty-fns'"
        >
          Dusty Fns
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
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
      <span>Dustin Hershman &copy; 2017 Built using
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
      title: 'Dusty Demos'
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
