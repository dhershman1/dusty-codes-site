<template>
  <v-toolbar color="indigo" dark>
    <v-toolbar-title>{{ title }} v{{ version }}</v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat @click="$emit('goBack')"> <v-icon v-html="'chevron_left'"></v-icon> Back</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Untitled'
    },
    version: {
      type: String,
      default: '0.0.0'
    }
  }
};
</script>
