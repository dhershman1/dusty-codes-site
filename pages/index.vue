<template>
  <v-layout row>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-toolbar color="indigo" dark>
          <v-toolbar-title>Welcome!</v-toolbar-title>
        </v-toolbar>
        <v-card-title class="headline">Welcome to my module demos</v-card-title>
        <v-card-text>
          <p>You can view each module by clicking on the navigation bar above.</p>

        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-toolbar color="indigo" dark>
          <v-toolbar-title>Coming Soon</v-toolbar-title>
        </v-toolbar>
        <v-card-title class="headline">Modules being added soon</v-card-title>
        <v-list>
          <v-list-tile href="https://www.npmjs.com/package/simply_valid">
            <v-list-tile-content >
              <v-list-tile-title>Simply Valid</v-list-tile-title>
              <v-list-tile-sub-title>A simple data driven validation utility library</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile href="https://www.npmjs.com/package/simple-card">
            <v-list-tile-content>
              <v-list-tile-title>Simple Card</v-list-tile-title>
              <v-list-tile-sub-title>A simple plug and play credit card validation library</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
