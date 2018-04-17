<template>
  <v-jumbotron dark height="200px">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">{{ title }}</h3>
          <h3>
            {{ summary }}
          </h3>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Unknown'
    },
    summary: {
      type: String,
      default: 'Unknown'
    }
  }
};
</script>
