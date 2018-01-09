<template>
  <v-card>
    <v-toolbar color="indigo" dark>
      <v-toolbar-title>{{ title }} v{{ version }}</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <p>{{ description }}</p>
      <div v-if="methodSelected">
        <h2>{{ selectedMethod.title }}</h2>
        <p>{{ selectedMethod.desc }}</p>
        <h2>Usage</h2>
        <v-divider class="mb-1"></v-divider>
        <v-btn ripple @click="currTab = 'standard'">
          Standard
        </v-btn>
        <v-btn ripple @click="currTab = 'commonjs'">
          CommonJS
        </v-btn>
        <v-btn ripple @click="currTab = 'browser'">
          Browser
        </v-btn>
        <pre v-highlightjs="tabInfo.code">
          <code :class="{'html': currTab === 'browser', 'javascript': currTab !== 'browser'}"></code>
        </pre>
        <h2>Syntax</h2>
        <v-divider></v-divider>
        <pre v-highlightjs="`${selectedMethod.syntax};`">
          <code class="javascript"></code>
        </pre>
        <h2>Arguments</h2>
        <v-divider class="mb-1"></v-divider>
        <arg-table :params="selectedMethod.params" />
        <h2 v-if="selectedMethod.properties">Options</h2>
        <v-divider v-if="selectedMethod.properties" class="mb-1"></v-divider>
        <arg-table v-if="selectedMethod.properties" :params="selectedMethod.properties" />
        <h2>Examples</h2>
        <v-divider></v-divider>
        <pre v-for="(ex, i) in selectedMethod.examples" :key="i" v-highlightjs="ex">
          <code class="javascript"></code>
        </pre>
        <h2>Returns</h2>
        <v-divider class="mb-1"></v-divider>
        <arg-table :params="selectedMethod.returns" :short="true" />
      </div>
      <span v-else>Select a Method to get started</span>
    </v-card-text>
  </v-card>
</template>

<script>
import argTable from './argument-table';
import isEmpty from 'dusty-fns/isEmpty';

export default {
  props: {
    'version': {
      type: String,
      default: '0.0.0'
    },
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
  components: {
    'arg-table': argTable
  },
  data() {
    return {
      currTab: 'standard'
    };
  },
  computed: {
    tabInfo() {
      return this.selectedMethod.usage[this.currTab.toLowerCase()];
    },
    methodSelected() {
      return !isEmpty(this.selectedMethod);
    }
  }
};
</script>
