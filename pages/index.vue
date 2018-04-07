<template>
  <v-layout row>
    <v-flex xs12 md12>
      <v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Dusty.codes</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <p>Welcome to my portfolio and documentation website</p>
          <p>You can click the top right corner to also open the navigation drawer</p>
          <p>You click one of the two cards below to go to their coorisponding home page</p>
        </v-card-text>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-card class="card-nav" height="100%" :to="'/portfolio'">
                <v-toolbar dense color="primary" dark>
                  <v-toolbar-title>Portfolio</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <p>Head over to the portfolio portal to explore my projects, experiences, and skills!</p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md6>
              <v-card class="card-nav" height="100%" :to="'/documentation'">
                <v-toolbar dense color="primary" dark>
                  <v-toolbar-title>Documentation</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <p>Head over to the documentation portal to see docs on how to use my public modules!</p>
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

