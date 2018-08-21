<template>
  <v-layout column>
    <v-jumbotron dark height="200px">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h1 class="hidden-sm-and-down display-3">Documentation</h1>
            <h1 class="hidden-md-and-up display-2">Documentation</h1>
            <h2>Click a button on a card to view that information of the module</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-layout wrap row>
      <v-flex
        xs12
        s6
        md4
        v-for="(card, i) in cards"
        :key="i">
        <v-card height="100%">
          <v-toolbar color="primary" dark dense card>
            <v-toolbar-title>
              {{ card.title }}
            </v-toolbar-title>
          </v-toolbar>
          <v-card-title>
            <div>
              <badges :module="card.title.toLowerCase()" />
              <br />
              <p class="mt-2 card-desc">{{ card.description }}</p>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn target="_blank" :href="card.github">View Github</v-btn>
            <v-btn target="_blank" :href="card.changelog">View Changelog</v-btn>
            <v-btn color="primary" dark :to="card.destination">Read Docs</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import badges from '../../components/badge';

/* eslint-disable max-len */
export default {
  components: {
    badges
  },
  head: {
    title: 'Documentation'
  },
  data: () => ({
    gradient: 'to top right, rgba(63,81,181, .7), rgba(34,46,84, .7)',
    cards: [
      {
        title: 'Kyanite',
        description: 'A tiny library of single type pure functional operators and utility functions',
        destination: '/documentation/kyanite',
        github: 'https://github.com/silicate-tools/kyanite',
        changelog: 'https://github.com/silicate-tools/kyanite/blob/master/CHANGELOG.md'
      }, {
        title: 'Phone-Fns',
        description: 'A tiny library of utility functions based that make working with phone numbers easier',
        destination: '/documentation/phone-fns',
        github: 'https://github.com/dhershman1/phone-fns',
        changelog: 'https://github.com/dhershman1/phone-fns/blob/master/changelog.md'
      }, {
        title: 'Simply_Valid',
        description: 'A data driven validation library with built in functionality for easy checks to make sure data is valid before going anywhere',
        destination: '/documentation/simply_valid',
        github: 'https://github.com/dhershman1/simply_valid',
        changelog: 'https://github.com/dhershman1/simply_valid/blob/master/changelog.md'
      }, {
        title: 'Simple-Card',
        description: 'A credit card validation system that uses a luhn algorithm to strictly ensure the data passed in are valid card numbers, while also giving you extra bits of information to help make life a bit easier',
        destination: '/documentation/simple-card',
        github: 'https://github.com/dhershman1/simple-card',
        changelog: 'https://github.com/dhershman1/simple-card/blob/master/changelog.md'
      }
    ]
  })
};
</script>

<style scoped>
.card-desc {
  font-size: 16px;
}
.header-color {
  background-color: #2b5994 !important;
}

.flex .v-card .v-toolbar {
  transform: none !important;
}
</style>

