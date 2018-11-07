<template>
  <v-card class="mb-2">
    <v-card-title class="pb-0">
      <h2>{{ currMethod.title }}</h2>
    </v-card-title>
    <v-card-text class="pt-2">
      <h4 v-if="currMethod.since">
        Since {{ currMethod.since }} |
        <span class="category" v-if="currMethod.category"> {{ currMethod.category }}</span>
        <span class="deprecated" v-if="currMethod.deprecated" justify-space-around>
          <v-icon small color="black">warning</v-icon> Deprecated: {{ currMethod.deprecated }}
        </span>
      </h4>
      <p class="desc">{{ currMethod.desc }}</p>
      <h2>Usage</h2>
      <v-divider class="mb-1"></v-divider>
      <v-btn ripple @click="currTab = 'standard'">
        Standard
      </v-btn>
      <v-btn ripple @click="currTab = 'commonjs'">
        CommonJS
      </v-btn>
      <v-btn v-if="currMethod.usage.cdn" ripple @click="currTab = 'cdn'">
        CDN
      </v-btn>
      <v-btn v-if="currMethod.usage.browser" ripple @click="currTab = 'browser'">
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
      <pre v-highlightjs="`${currMethod.syntax}`">
        <code class="javascript"></code>
      </pre>
      <h2>Arguments</h2>
      <v-divider class="mb-1"></v-divider>
      <data-table :params="currMethod.params" />
      <h2 v-if="currMethod.properties">Options</h2>
      <v-divider v-if="currMethod.properties" class="mb-1"></v-divider>
      <data-table v-if="currMethod.properties" :params="currMethod.properties" />
      <h2 class="mt-1">Returns</h2>
      <v-divider class="mb-1"></v-divider>
      <data-table :params="currMethod.returns" :short="true" />
      <h2 class="mt-1">Examples</h2>
      <v-divider></v-divider>
      <pre v-for="(ex, i) in currMethod.examples" :key="i" v-highlightjs="ex">
        <code class="javascript"></code>
      </pre>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import dataTable from './data-table'

export default {
  props: {
    fn: {
      type: Object,
      required: false
    }
  },
  components: {
    dataTable
  },
  data () {
    return {
      currTab: 'standard'
    }
  },
  computed: {
    ...mapState('docs', ['selectedMethod']),
    currMethod () {
      return this.fn ? this.fn : this.selectedMethod
    },
    tabInfo () {
      return this.selectedMethod.usage[this.currTab.toLowerCase()]
    }
  }
}
</script>

<style scoped>
code:before {
  content: '';
}

.desc {
  margin-top: 0.3rem;
}

.category {
  background-color: #a4b1fc;
  color: #000;
  padding: 0.3rem;
  border-radius: 0.5rem;
}

.deprecated {
  background-color: #aa2e2e;
  margin-left: 0.3rem;
  color: #000;
  padding: 0.3rem;
  border-radius: 0.5rem;
}
</style>

