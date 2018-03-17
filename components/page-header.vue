<template>
  <v-card color="indigo" dark>
    <v-card-title primary-title>
      <div>
        <h3>{{ title }}</h3>
      </div>
    </v-card-title>

    <v-card-text>
      <div>
        {{ summary }}
      </div>
    </v-card-text>
  </v-card>
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
