<template>
  <v-layout row wrap>
    <v-btn
      fab
      icon
      dark
      small
      left
      color="indigo"
      class="hidden-md-and-up"
      @click="drawer = !drawer">
      <v-icon v-html="!drawer ? 'chevron_right' : 'chevron_left'"></v-icon>
    </v-btn>
    <v-flex sm1 md3>
      <methods :drawer="drawer" :docs="docsData" @switchMethod="switchMethod" />
    </v-flex>
    <v-flex sm12 md9>
      <code-block
        :version="moduleInfo.version"
        :description="description"
        :title="moduleInfo.name"
        :selected-method="selectedMethod" />
    </v-flex>
  </v-layout>
</template>

<script>
import { name, version } from 'simply_valid/package.json';
import codeBlock from '../components/code-block.vue';
import docs from 'simply_valid/docs.js';
import dusty from 'dusty-fns';
import methods from '../components/methods.vue';

export default {
  components: {
    methods,
    'code-block': codeBlock
  },
  data() {
    return {
      drawer: false,
      miniVariant: true,
      methodSelected: false,
      selectedMethod: {},
      description: 'Dusty-fns is a tiny library of functional operators and utility helper functionality'
    };
  },
  methods: {
    switchMethod(item) {
      this.drawer = false;
      this.miniVariant = true;
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

