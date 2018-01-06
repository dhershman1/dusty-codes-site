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
      @click="drawer = !drawer; miniVariant = !miniVariant">
      <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
    </v-btn>
    <v-flex sm1 md3>
      <methods :drawer="drawer" :docs="docsData" @switchMethod="switchMethod" />
    </v-flex>
    <v-flex sm12 md9>
      <code-block
        width="100%"
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
      drawer: false,
      miniVariant: true,
      methodSelected: false,
      selectedMethod: {},
      description: 'Phone-fns is a tiny library of utility functions based that make working with phone numbers easier'
    };
  },
  methods: {
    switchMethod(item) {
      this.drawer = false;
      this.miniVariant = true;
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
