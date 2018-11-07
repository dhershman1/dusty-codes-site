<template>
  <v-layout column>
    <v-flex xs12>
      <v-layout align-center>
        <v-flex text-xs-center class="header-label">
          <h3 class="display-3">{{ $route.params.module | capitalize }}</h3>
          <h4 class="display-1">v{{ module.version }}</h4>
          <badges :module="$route.params.module" />
          <h3>{{ module.description }}</h3>
        </v-flex>
      </v-layout>
      <v-tabs slider-color="orange" grow dark icons-and-text color="primary" v-model="handleTabs">
        <v-tab ripple href="#readme" :key="'readme'">
          Readme
          <v-icon>info</v-icon>
        </v-tab>
        <v-tab ripple v-if="changelogHtml" href="#changelog" :key="'changelog'">
          Changelog
          <v-icon>assignment</v-icon>
        </v-tab>
        <v-tab ripple href="#docs" :key="'docs'">
          Functions
          <v-icon>description</v-icon>
        </v-tab>
        <v-tab ripple target="_blank" :href="github">
          Go to Github
          <v-icon>open_in_new</v-icon>
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="handleTabs">
        <v-tab-item :key="'readme'" value="readme">
          <v-layout row wrap>
            <v-flex xs12>
              <v-card height="100%">
                <v-card-text class="readme" v-html="readmeHtml" />
              </v-card>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab-item :key="'changelog'" value="changelog">
          <v-layout row wrap>
            <v-flex xs12>
              <v-card height="100%">
                <v-card-text class="readme" v-html="changelogHtml" />
              </v-card>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab-item :key="'docs'" value="docs">
          <method-docs class="mt-1" />
        </v-tab-item>
      </v-tabs-items>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex'
import { capitalize } from 'kyanite'
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
    ...mapGetters('docs', ['readmeHtml', 'changelogHtml']),
    handleTabs: {
      get () {
        return this.currDisplay
      },

      set (val) {
        this.switchDisplay(val)
      }
    },
    github () {
      const links = {
        kyanite: 'https://github.com/dhershman1/kyanite',
        simplyvalid: 'https://github.com/dhershman1/simply_valid',
        phonefns: 'https://github.com/dhershman1/phone-fns',
        simplecard: 'https://github.com/dhershman1/simple-card'
      }

      return links[this.$route.params.module.replace(/[-_]/g, '')]
    }
  },
  methods: mapMutations(['switchDisplay'])
}
</script>

<style scoped>
.header-label {
  color: #fff;
}
</style>

