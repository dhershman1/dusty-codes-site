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
  <!-- <v-card color="primary" dark>
    <v-card-title primary-title>
      <div>
        <h1>
          <v-btn icon exact :to="'/portfolio'">
            <v-icon v-html="'chevron_left'"></v-icon>
          </v-btn>
          {{ title }}
        </h1>
      </div>
    </v-card-title>

    <v-card-text>
      <div>
        <p>{{ summary }}</p>
      </div>
    </v-card-text>
  </v-card> -->
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
