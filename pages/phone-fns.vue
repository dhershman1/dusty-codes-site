<template>
  <v-layout row wrap>
    <v-flex xs3>
      <methods :methods="methodList" @switchMethod="switchMethod" />
    </v-flex>
    <v-flex xs9>
      <code-block
        :description="description"
        :title="'Phone Fns'"
        :selected-method="selectedMethod" />
    </v-flex>
  </v-layout>
</template>

<script>
import codeBlock from '../components/code-block.vue';
import methods from '../components/methods.vue';
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
  components: {
    methods,
    'code-block': codeBlock
  },
  data() {
    return {
      methodSelected: false,
      selectedMethod: {},
      description: 'Phone-fns is a tiny library of utility functions based that make working with phone numbers easier'
    };
  },
  methods: {
    switchMethod(item) {
      this.methodSelected = true;
      this.selectedMethod = item;
    }
  },
  computed: {
    methodList() { // eslint-disable-line complexity
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
