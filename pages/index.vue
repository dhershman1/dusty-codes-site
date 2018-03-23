<template>
  <v-layout row>
    <v-flex xs12 md12>
      <v-card>
        <v-toolbar color="indigo" dark>
          <v-toolbar-title>Dusty.codes</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <p>This is just a small nav of places you can go here on dusty.codes!</p>
          <p>You can click the top right corner to also open the navigation drawer</p>
        </v-card-text>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 md3>
              <v-card class="card-nav" height="100%" :to="'/portfolio'">
                <v-card-title><strong>Portfolio</strong></v-card-title>
                <v-card-text>
                  <p>The main portfolio page to check my skills, experience, and projects out!</p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md3>
              <v-card class="card-nav" height="100%" :to="'/dusty-fns'">
                <v-card-title><strong>Dusty Fns</strong></v-card-title>
                <v-card-text>
                  <p>Documentation for my pure functional library Dusty Fns</p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md3>
              <v-card class="card-nav" height="100%" :to="'/phone-fns'">
                <v-card-title><strong>Phone Fns</strong></v-card-title>
                <v-card-text>
                  <p>Documentation for my phone number manipulation library Phone Fns</p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md3>
              <v-card class="card-nav" height="100%" :to="'/simple-card'">
                <v-card-title><strong>Simple Card</strong></v-card-title>
                <v-card-text>
                  <p>
                    Documentation for the simple card library/module
                    for credit card validation using the luhn algorithm
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md3>
              <v-card class="card-nav" height="100%" :to="'/simply_valid'">
                <v-card-title><strong>Simply Valid</strong></v-card-title>
                <v-card-text>
                  <p>
                    Documentation for my simply valid library/module
                    for plug and play data driven validation
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
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

