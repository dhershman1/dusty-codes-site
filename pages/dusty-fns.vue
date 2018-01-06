<template>
  <v-layout row wrap>
    <v-flex xs3>
      <methods :docs="docsData" @switchMethod="switchMethod" />
    </v-flex>
    <v-flex xs9>
      <code-block
        :version="moduleInfo.version"
        :description="description"
        :title="moduleInfo.name"
        :selected-method="selectedMethod" />
    </v-flex>
  </v-layout>
</template>

<script>
import { name, version } from 'dusty-fns/package.json';
import codeBlock from '../components/code-block.vue';
import docs from 'dusty-fns/docs.js';
import dusty from 'dusty-fns';
import methods from '../components/methods.vue';

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
      this.selectedMethod = dusty.find(({ title }) => title === item.title, docs);
    }
  },
  computed: {
    moduleInfo() {
      return {
        name,
        version
      };
    },
    docsData() {
      return docs;
    }
  }
};
</script>

