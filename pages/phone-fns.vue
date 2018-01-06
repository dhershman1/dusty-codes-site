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
import { name, version } from 'phone-fns/package.json';
import codeBlock from '../components/code-block.vue';
import docs from 'phone-fns/docs.js';
import find from 'dusty-fns/find';
import methods from '../components/methods.vue';
import phoneFns from 'phone-fns';

export default {
  components: {
    methods,
    'code-block': codeBlock
  },
  data() {
    return {
      methodSelected: false,
      selectedMethod: {},
      description: 'Phone-fns is a tiny library of utility functions based that make working with phone numbers easier'
    };
  },
  methods: {
    switchMethod(item) {
      this.methodSelected = true;
      this.selectedMethod = find(({ title }) => title === item.title, docs);
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
