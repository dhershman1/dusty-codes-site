<template>
  <v-layout class="single" align-center justify-center column>
    <v-layout align-center justify-end column>
      <h1 class="display-2">Dusty Codes</h1>
      <h2 class="headline">Portfolio &amp; Documentation Site</h2>
    </v-layout>
    <v-layout justify-center row>
      <v-tooltip left>
        <v-btn
          class="pa-4"
          color="secondary"
          large
          :to="'/portfolio'"
          slot="activator">
          <span class="headline">Portfolio</span>
        </v-btn>
        <span>Go to the portfolio portal</span>
      </v-tooltip>
      <v-tooltip right>
        <v-btn
          class="pa-4"
          color="secondary"
          large
          :to="'/documentation'"
          slot="activator">
          <span class="headline">Documentation</span>
        </v-btn>
        <span>Go to the documentation portal</span>
      </v-tooltip>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="social-links">
          <v-card-title class="pb-0 pt-2" primary-title>
            <h3>Get In Contact</h3>
          </v-card-title>
          <v-card-text>
            <a href="https://twitter.com/SirDugs" target="_blank"><v-icon>mdi-twitter</v-icon> Twitter</a>
            <a class="pl-3" href="https://github.com/dhershman1" target="_blank"><v-icon>mdi-github</v-icon> Github</a>
            <a class="pl-3" href="https://www.linkedin.com/in/dustin-hershman-938953101/" target="_blank"><v-icon>mdi-linkedin</v-icon> LinkedIn</a>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<style scoped>
  .social-links a {
    font-size: 20px;
    color: #757575;
    text-decoration: none;
  }

  .social-links .v-icon:hover,
  .social-links a:hover .v-icon {
    transition: all 0.3s;
    color: #b3d4fc;
  }

  .social-links a:hover {
    transition: all 0.3s;
    color: #b3d4fc;
  }

  .single {
    height: 100%;
  }

  .log-date {
    list-style: none;
    font-weight: bold;
  }

  h1, h2 {
    color: #FFF;
  }
</style>
