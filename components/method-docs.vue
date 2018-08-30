<template>
  <v-layout
    row
    wrap>
    <v-btn
      fab
      icon
      dark
      small
      left
      color="primary"
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
    <v-flex sm12 md9 dark>
      <transition name="slide-fade" mode="out-in">
        <code-block :selected-method="selectedMethod" :key="selectedMethod.title" />
      </transition>
    </v-flex>
  </v-layout>
</template>

<script>
import codeBlock from './code-block'
import find from 'kyanite/find'
import methods from './methods'

export default {
  props: {
    docs: {
      type: Array,
      default: () => []
    }
  },
  components: {
    'code-block': codeBlock,
    methods
  },
  data () {
    return {
      drawer: false,
      selectedMethod: this.docs[0]
    }
  },
  methods: {
    switchMethod (item) {
      this.drawer = false
      this.selectedMethod = find(({ title }) => title === item.title, this.docs)
    }
  }
}
</script>
