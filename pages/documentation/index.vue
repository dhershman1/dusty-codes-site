<template>
  <v-layout column>
    <v-flex class="header" text-xs-center>
      <h1 class="hidden-sm-and-down display-3">Documentation</h1>
      <h1 class="hidden-md-and-up display-2">Documentation</h1>
    </v-flex>
    <v-layout wrap row>
      <v-flex
        xs12
        s6
        md4
        v-for="(card, i) in cards"
        :key="i">
        <v-card hover :to="card.destination" ripple height="100%">
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
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import badges from '../../components/badge'

export default {
  components: {
    badges
  },
  head: {
    title: 'Documentation'
  },
  data: () => ({
    cards: [
      {
        title: 'Kyanite',
        description: 'A tiny library of single type pure functional operators and utility functions',
        destination: '/documentation/kyanite',
      }, {
        title: 'Phone-Fns',
        description: 'A tiny library of utility functions based that make working with phone numbers easier',
        destination: '/documentation/phone-fns',
      }, {
        title: 'Simply_Valid',
        description: 'A data driven validation library with built in functionality for easy checks to make sure data is valid before going anywhere',
        destination: '/documentation/simply_valid',
      }, {
        title: 'Simple-Card',
        description: 'A credit card validation system that uses a luhn algorithm to strictly ensure the data passed in are valid card numbers, while also giving you extra bits of information to help make life a bit easier',
        destination: '/documentation/simple-card',
      }
    ]
  })
}
</script>

<style scoped>
.header {
  color: #fff;
}
.card-desc {
  font-size: 16px;
}

.flex .v-card .v-toolbar {
  transform: none !important;
}
</style>

