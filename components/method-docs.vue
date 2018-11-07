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
      @click="toggleDrawer">
      <v-icon v-html="!drawer ? 'chevron_right' : 'chevron_left'"></v-icon>
    </v-btn>
    <v-flex sm2 md4>
      <methods />
    </v-flex>
    <v-flex sm12 md8 dark>
      <transition v-if="methodStyle === 'one'" name="slide-fade" mode="out-in">
        <code-block :key="selectedMethod.title" />
      </transition>
      <code-block v-else v-for="fn in sortedDocs" :key="fn.title" :id="fn.title" :fn="fn" />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import codeBlock from './code-block'
import methods from './methods'

export default {
  components: {
    codeBlock,
    methods
  },
  computed: {
    ...mapState(['methodStyle', 'drawer']),
    ...mapState('docs', ['selectedMethod']),
    ...mapGetters('docs', ['sortedDocs'])
  },
  methods: {
    ...mapMutations(['toggleDrawer'])
  }
}
</script>
