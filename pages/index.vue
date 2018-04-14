<template>
  <v-layout row>
    <v-flex xs12 md12>
      <v-jumbotron dark>
        <v-container fill-height>
          <v-layout align-center>
            <v-flex text-xs-center>
              <h3 class="display-3">Dusty Codes</h3>
              <h3>Welcome to my Portfolio &amp; Documentation website</h3>
              <h3>The top left button opens the nav drawer</h3>
              <h3>or simply click a button below</h3>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
      <v-jumbotron dark height="20%">
        <v-layout row wrap>
          <v-flex xs12 md6 text-xs-center>
            <v-tooltip bottom>
              <v-btn
                class="pa-2"
                :to="'/portfolio'"
                flat
                slot="activator">
                <h1>Portfolio</h1>
              </v-btn>
              <span>Go to the portfolio portal</span>
            </v-tooltip>
          </v-flex>
          <v-flex xs12 md6 text-xs-center>
            <v-tooltip bottom>
              <v-btn
                class="pa-2"
                :to="'/documentation'"
                flat
                slot="activator">
                <h1>Documentation</h1>
              </v-btn>
              <span>Go to the documentation portal</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-jumbotron>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.card-nav:hover {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  color: #FFF;
  background-color: #3F51B5;
}
</style>

