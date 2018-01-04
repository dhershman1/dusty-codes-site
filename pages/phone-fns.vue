<template>
  <v-layout row wrap>
    <v-flex xs3>
      <v-card>
        <v-toolbar color="indigo" dark>
          <v-toolbar-title>Methods</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-tile
            :key="i"
            v-for="(item, i) in methods"
            @click="switchMethod(item)"
          >
            <v-list-tile-content>
              <v-list-tile-title
              v-text="item.name" />
              <v-list-tile-sub-title v-text="item.desc" />
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
    <v-flex xs9>
      <v-card>
        <v-toolbar color="indigo" dark>
          <v-toolbar-title>Phone Fns</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <p>Phone-fns is a tiny library of utility functions based that make working with phone numbers easier</p>
          <div v-if="methodSelected">
            <h2>{{ selectedMethod.name }}</h2>
            <p>{{ selectedMethod.desc }}</p>
            <v-divider></v-divider>
          </div>
          <span v-else>Select a Method to get started</span>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import phoneFns from 'phone-fns';

const desc = {
  'breakdown': 'Takes a provided phone string and breaks it down into an object of codes',
  'callingCodes.js': 'An Object of country calling codes',
  'find': 'Find a piece of the phone number and return it',
  'format': 'Allows you to format phone numbers however you desire',
  'getCountries': 'Grabs all of the countries (and their alternate names) for the provided country calling code',
  'getCountryCode': 'Grabs the calling code for the provided country from the callingCodes.json',
  'identical': 'Checks if the two provided numbers are identical or not',
  'isValid': 'Checks if the phone number is valid or not',
  'uglify': 'Strips all of the special characters from the given string'
};

export default {
  data() {
    return {
      methodSelected: false,
      selectedMethod: {}
    };
  },
  methods: {
    switchMethod(item) {
      this.methodSelected = true;
      this.selectedMethod = item;
      console.log(phoneFns);
    }
  },
  computed: {
    methods() { // eslint-disable-line complexity
      const methodArr = [];

      for (const prop in phoneFns) {
        if (prop !== 'findLocal' && prop !== 'getCode' && prop !== 'callingCodes.js') {
          const methodObj = {
            name: prop,
            desc: desc[prop]
          };

          methodArr.push(methodObj);
        }
      }

      return methodArr;
    }
  }
};
</script>
