<template>
  <v-app>
    <v-toolbar
      fixed
      light
      app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        flat
        exact
        :to="'/'"
      >
        Home
      </v-btn>
      <v-btn
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
      </v-btn>
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
    </v-toolbar>
    <v-content>
      <v-container grid-list-md fluid>
        <nuxt />
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
      title: 'Module Demos'
    };
  }
};
</script>
