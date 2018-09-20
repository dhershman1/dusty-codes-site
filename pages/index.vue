<template>
  <v-layout class="single" align-center justify-center column>
    <v-layout align-center justify-end column>
      <h1 class="display-2">Dusty Codes</h1>
      <h2 class="headline">Portfolio &amp; Documentation website</h2>
    </v-layout>
    <v-layout justify-center row>
      <v-tooltip bottom>
        <v-btn
          class="pa-2"
          color="secondary"
          large
          :to="'/portfolio'"
          slot="activator">
          <span class="headline">Portfolio</span>
        </v-btn>
        <span>Go to the documentation portal</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn
          class="pa-2"
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
            <span class="log-date">September 19th, 2018</span>
            <ul>
              <li>Added ability to swipe through tabs on mobile</li>
              <li>Added ability to swipe open nav drawer on mobile</li>
              <li>Fixed Method search breaking</li>
              <li>Removed non working buttons on mobile</li>
            </ul>
            <span class="log-date">September 18th, 2018</span>
            <ul>
              <li>Arranged functions to return alphabetically</li>
              <li>Removed buttons on documentation cards</li>
              <li>You can now click a card on the documentation portal to go to it</li>
              <li>Added a "Go to Github" tab on module documentation page</li>
              <li>Adjust layout for methods display</li>
              <li>Updated Work Experience to be more Recent</li>
            </ul>
            <span class="log-date">September 14th, 2018</span>
            <ul>
              <li>This whats new box</li>
              <li>New deprecation flags added to show deprecated functions</li>
              <li>Documentation auto scrolling when selecting a method smoothed</li>
              <li>Added Changelog to documentation tabs</li>
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

