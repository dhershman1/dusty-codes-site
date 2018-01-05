<template>
  <v-card>
    <v-toolbar color="indigo" dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <p>{{ description }}</p>
      <div v-if="methodSelected">
        <h2>{{ selectedMethod.name }}</h2>
        <p>{{ selectedMethod.desc }}</p>
        <v-divider></v-divider>
      </div>
      <span v-else>Select a Method to get started</span>
    </v-card-text>
  </v-card>
</template>

<script>
import isEmpty from 'dusty-fns/isEmpty';

export default {
  props: {
    'title': {
      type: String,
      default: ''
    },
    'description': {
      type: String,
      default: ''
    },
    'selected-method': {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    methodSelected() {
      return !isEmpty(this.selectedMethod);
    }
  }
};
</script>

