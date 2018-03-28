<template>
  <div>
    <h2>{{ selectedMethod.title }}</h2>
    <h4 v-if="selectedMethod.since">
      Since {{ selectedMethod.since }} |
      <span class="category" v-if="selectedMethod.category"> {{ selectedMethod.category }}</span>
    </h4>
    <p>{{ selectedMethod.desc }}</p>
    <h2>Usage</h2>
    <v-divider class="mb-1"></v-divider>
    <v-btn ripple @click="currTab = 'standard'">
      Standard
    </v-btn>
    <v-btn ripple @click="currTab = 'commonjs'">
      CommonJS
    </v-btn>
    <v-btn v-if="selectedMethod.usage.cdn" ripple @click="currTab = 'cdn'">
      CDN
    </v-btn>
    <v-btn v-if="selectedMethod.usage.browser" ripple @click="currTab = 'browser'">
      Browser
    </v-btn>
    <pre v-highlightjs="tabInfo.code">
      <code
      :class="{
        'html': currTab === 'browser' || currTab === 'cdn',
        'javascript': currTab !== 'browser' && currTab !== 'cdn'
        }"></code>
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
    <h2 class="mt-1">Returns</h2>
    <v-divider class="mb-1"></v-divider>
    <arg-table :params="selectedMethod.returns" :short="true" />
    <h2 class="mt-1">Examples</h2>
    <v-divider></v-divider>
    <pre v-for="(ex, i) in selectedMethod.examples" :key="i" v-highlightjs="ex">
      <code class="javascript"></code>
    </pre>
  </div>
</template>

<script>
import argTable from './argument-table';
import isEmpty from 'dusty-fns/isEmpty';

export default {
  props: {
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
    }
  }
};
</script>

<style scoped>
code:before {
  content: '';
}
.category {
  background-color: #a4b1fc;
  color: #000;
  padding: 0.3rem;
  border-radius: 0.5rem;
}
</style>

