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
        <v-card>
          <v-card-title class="pb-0 pt-2" primary-title>
            <h3>Whats New? (In the last 3 updates)</h3>
          </v-card-title>
          <v-card-text>
            <span class="log-date">April 22nd, 2019</span>
            <ul>
              <li>Cleaned up and upgraded Documentation portal</li>
              <li>Fixed a few typos</li>
              <li>Simply_Valid's documentation link now goes to correct place</li>
              <li>Fixed some slight spacing issues</li>
            </ul>
            <span class="log-date">November 7th, 2018</span>
            <ul>
              <li>Fixed FAB button not appearing</li>
              <li>Added ability to display all of the functions rather than 1</li>
              <li>Upgraded all dependencies</li>
              <li>Tweaked Displays for function cards</li>
            </ul>
            <span class="log-date">September 19th, 2018</span>
            <ul>
              <li>Added ability to swipe through tabs on mobile</li>
              <li>Added ability to swipe open nav drawer on mobile</li>
              <li>Fixed Method search breaking</li>
              <li>Removed non working buttons on mobile</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<style scoped>
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
