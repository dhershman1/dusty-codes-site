<template>
  <v-container fluid>
    <transition name="slide-fade" mode="out-in">
      <v-layout
        row
        wrap
        :key="'docs'"
        v-if="display === 'docs'">
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
          <methods
            :drawer="drawer"
            :docs="docs"
            @switchMethod="switchMethod" />
        </v-flex>
        <v-flex sm12 md9>
          <code-block :selected-method="selectedMethod" />
        </v-flex>
      </v-layout>
      <v-layout
        row
        wrap
        :key="'info'"
        v-else>
        <v-flex sm12>
          <slot name="base"></slot>
        </v-flex>
      </v-layout>
    </transition>
  </v-container>
</template>

<script>
import codeBlock from '../components/code-block.vue';
import find from 'dusty-fns/find';
import isEmpty from 'dusty-fns/isEmpty';
import methods from '../components/methods.vue';

export default {
  components: {
    methods,
    'code-block': codeBlock
  },
  props: {
    display: {
      type: String,
      default: 'info'
    },
    docs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      drawer: false,
      miniVariant: true,
      methodSelected: false,
      selectedMethod: this.docs[0]
    };
  },
  methods: {
    switchMethod(item) {
      this.drawer = false;
      this.miniVariant = true;
      this.methodSelected = true;
      this.selectedMethod = find(({ title }) => title === item.title, this.docs);
    }
  }
};
</script>

