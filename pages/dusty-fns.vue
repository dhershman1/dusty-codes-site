<template>
  <v-layout row wrap>
    <v-flex xs3>
      <methods :docs="docsData" @switchMethod="switchMethod" />
    </v-flex>
    <v-flex xs9>
      <code-block
        :version="moduleVersion"
        :description="description"
        :title="'Dusty Fns'"
        :selected-method="selectedMethod" />
    </v-flex>
  </v-layout>
</template>

<script>
import codeBlock from '../components/code-block.vue';
import docs from '../static/docs/dusty-fns.js';
import dusty from 'dusty-fns';
import methods from '../components/methods.vue';
import { version } from 'dusty-fns/package.json';

export default {
  components: {
    methods,
    'code-block': codeBlock
  },
  data() {
    return {
      methodSelected: false,
      selectedMethod: {},
      description: 'Dusty-fns is a tiny library of functional operators'
    };
  },
  methods: {
    switchMethod(item) {
      this.methodSelected = true;
      this.selectedMethod = dusty.find(({ title }) => title === item.name, docs);
    }
  },
  computed: {
    moduleVersion() {
      return version;
    },
    docsData() {
      return docs;
    }
  }
};
</script>

