<template>
  <v-jumbotron dark height="200px">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h1 class="display-3">{{ title }}</h1>
          <h2>
            {{ summary }}
          </h2>
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
