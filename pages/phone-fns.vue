<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">Phone Fns</v-card-title>
        <v-card-text>
          <p>Phone-fns is a tiny library of utility functions based that make working with phone numbers easier</p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import phoneFns from 'phone-fns';

export default {
  computed: {
    methods() {
      const methodArr = [];

      for (const prop in phoneFns) {
        methodArr.push(prop);
      }

      return methodArr;
    }
  }
};
</script>