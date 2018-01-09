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
import { name, version } from 'simple-card/package.json';
import codeBlock from '../components/code-block.vue';
import docs from 'simple-card/docs.js';
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
      description: 'Simple card is a credit card validation system that uses a luhn algorithm to strictly ensure the data passed in are valid card numbers, while also giving you extra bits of information to help make life a bit easier.'
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

