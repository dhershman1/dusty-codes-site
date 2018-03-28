<template>
  <v-toolbar color="indigo" dark>
    <v-toolbar-title>{{ title }} v{{ version }}</v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat @click="$emit('goInfo')"> <v-icon v-html="'info'"></v-icon> Info</v-btn>
      <v-btn flat @click="$emit('goDocs')"> <v-icon v-html="'description'"></v-icon> Documentation</v-btn>
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
