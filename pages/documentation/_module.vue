<template>
  <v-layout column>
    <v-flex xs12>
      <v-layout align-center>
        <v-flex text-xs-center class="header-label">
          <h3 class="display-3">{{ $route.params.module | capitalize }} v{{ module.version }}</h3>
          <badges :module="$route.params.module" />
          <h3>{{ module.description }}</h3>
        </v-flex>
      </v-layout>
      <v-tabs grow dark icons-and-text color="primary">
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab @click="switchDisplay('readme')">
          Readme
          <v-icon>info</v-icon>
        </v-tab>
        <v-tab v-if="changelogHtml" @click="switchDisplay('changelog')">
          Changelog
          <v-icon>assignment</v-icon>
        </v-tab>
        <v-tab @click="switchDisplay('methods')">
          Functions
          <v-icon>description</v-icon>
        </v-tab>
      </v-tabs>
      <transition name="slide-fade" mode="out-in">
        <v-layout
          row
          wrap
          v-if="currDisplay === 'readme' || currDisplay === 'changelog'"
          :key="'readme'">
          <v-flex xs12>
            <v-card height="100%">
              <v-card-text class="readme" v-html="currDisplay === 'readme' ? readmeHtml : changelogHtml" />
            </v-card>
          </v-flex>
        </v-layout>
        <method-docs v-else :key="'docs'" />
      </transition>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex'
import capitalize from 'kyanite/capitalize'
import badges from '../../components/badge'
import methodDocs from '../../components/method-docs'

export default {
  components: {
    methodDocs,
    badges
  },
  head () {
    return {
      title: `Documentation - ${capitalize(this.$route.params.module)}`
    }
  },
  validate ({ params }) {
    const valid = ['kyanite', 'simply_valid', 'simple-card', 'phone-fns']

    return valid.includes(params.module)
  },
  filters: {
    capitalize
  },
  asyncData ({ params, store }) {
    return store.dispatch('docs/fetchInfo', {
      cl: params.module === 'kyanite' ? 'CHANGELOG' : 'changelog',
      module: params.module
    })
  },

  computed: {
    ...mapState(['currDisplay']),
    ...mapState('docs', ['module']),
    ...mapGetters('docs', ['readmeHtml', 'changelogHtml'])
  },
  methods: mapMutations(['switchDisplay'])
}
</script>

<style scoped>
.header-label {
  color: #fff;
}
</style>

