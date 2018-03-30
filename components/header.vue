<template>
  <v-toolbar color="indigo" dark>
    <v-toolbar-title class="mr-2">{{ title }} v{{ version }}</v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat :class="{active: current === 'info'}" @click="switchTo('info')">
        <v-icon v-html="'info'"></v-icon> Info
      </v-btn>
      <v-btn flat :class="{active: current === 'docs'}" @click="switchTo('docs')">
        <v-icon v-html="'description'"></v-icon> Documentation
      </v-btn>
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
  },
  data() {
    return {
      current: 'info'
    };
  },
  methods: {
    switchTo(to) {
      this.current = to;

      if (to === 'docs') {
        this.$emit('goDocs');
      } else {
        this.$emit('goInfo');
      }
    }
  }
};
</script>

<style scoped>
.active {
  background-color: hsla(0, 0%, 0%, 0.288) !important;
};
</style>

