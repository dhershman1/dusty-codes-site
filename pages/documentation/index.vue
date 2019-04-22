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
        md3
        v-for="(card, i) in cards"
        :key="i">
        <v-card hover :target="card.href ? '_blank' : '_self'" :href="card.href" :to="card.to" ripple height="100%">
          <v-toolbar :color="card.depricated ? 'warning' : 'primary'" dark dense card>
            <v-toolbar-title>
              {{ card.title }} <a :href="card.npm">
                <img :src="card.npmBadge" />
              </a>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-title>
            <div>
              <v-alert :value="card.depricated" type="warning">
                This package is depricated and no longer maintained
              </v-alert>
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
  data () {
    return {
    cards: [
      {
        title: 'Kyanite',
        description: 'A tiny library of single type pure functional operators and utility functions',
        href: 'https://kyanite.dusty.codes',
        npm: 'https://www.npmjs.com/package/kyanite',
        npmBadge: 'https://img.shields.io/npm/v/kyanite.svg?style=flat-square'
      }, {
        title: 'Phone-Fns',
        description: 'A tiny library of utility functions based that make working with phone numbers easier',
        href: 'https://phone-fns.dusty.codes',
        npm: 'https://www.npmjs.com/package/phone-fns',
        npmBadge: 'https://img.shields.io/npm/v/phone-fns.svg?style=flat-square'
      }, {
        title: 'Simply_Valid',
        description: 'A data driven validation library with built in functionality for easy checks to make sure data is valid before going anywhere',
        href: 'http://simply_valid.dusty.codes',
        npm: 'https://www.npmjs.com/package/simply_valid',
        npmBadge: 'https://img.shields.io/npm/v/simply_valid.svg?style=flat-square'
      }, {
        title: 'Simple-Card',
        depricated: true,
        description: 'A credit card validation system that uses a luhn algorithm to strictly ensure the data passed in are valid card numbers, while also giving you extra bits of information to help make life a bit easier',
        to: '/documentation/simple-card',
        npm: 'https://www.npmjs.com/package/simple-card',
        npmBadge: 'https://img.shields.io/npm/v/simple-card.svg?style=flat-square'
      }
    ]
  }
  }
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
