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
      <methods
        :back="back"
        :drawer="drawer"
        :docs="docs"
        @switchMethod="switchMethod" />
    </v-flex>
    <v-flex sm12 md9>
      <transition name="slide-fade" mode="out-in">
        <slot v-if="!hideBase" name="base"></slot>
        <code-block v-else :selected-method="selectedMethod" />
      </transition>
    </v-flex>
  </v-layout>
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
    back: {
      type: Boolean,
      default: false
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
      selectedMethod: {}
    };
  },
  computed: {
    hideBase() {
      return !isEmpty(this.selectedMethod);
    }
  },
  methods: {
    switchMethod(item) {
      this.drawer = false;
      this.miniVariant = true;
      this.methodSelected = true;
      this.selectedMethod = find(({ title }) => title === item.title, this.docs);
    }
  },
  watch: {
    back() {
      this.selectedMethod = {};
    }
  }
};
</script>

