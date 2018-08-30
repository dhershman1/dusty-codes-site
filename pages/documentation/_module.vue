<template>
  <v-layout column>
    <v-flex xs12>
      <v-layout align-center>
        <v-flex text-xs-center class="header-label">
          <h3 class="display-3">{{ name | capitalize }} v{{ version }}</h3>
          <badges :module="$route.params.module"></badges>
          <h3>{{ description }}</h3>
        </v-flex>
      </v-layout>
      <v-tabs grow dark icons-and-text color="primary">
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab @click="currDisplay = 'info'">
          Readme
          <v-icon>info</v-icon>
        </v-tab>
        <v-tab @click="currDisplay = 'methods'">
          Functions
          <v-icon>description</v-icon>
        </v-tab>
      </v-tabs>
      <transition name="slide-fade" mode="out-in">
        <v-layout
          row
          wrap
          v-if="currDisplay === 'info'"
          :key="'info'">
          <v-flex xs12>
            <v-card height="100%">
              <v-card-text class="readme" v-html="readMe" />
            </v-card>
          </v-flex>
        </v-layout>
        <method-docs v-else :docs="docs" :key="'docs'"></method-docs>
      </transition>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
import capitalize from 'kyanite/capitalize'
import marked from 'marked'
import hljs from 'highlight.js'
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
  asyncData ({ params }) {
    return axios.get(`https://cdn.jsdelivr.net/npm/${params.module}@latest/info.json`)
      .then(({ data }) => {
        return Object.assign({ name: params.module }, data, { currDisplay: 'info', readMe: '' })
      })
      .catch(() => ({
        name: params.module,
        version: '0.0.0',
        docs: [],
        currDisplay: 'info'
      }))
  },
  mounted () {
    axios.get(`https://cdn.jsdelivr.net/npm/${this.$route.params.module}@latest/README.md`)
      .then(({ data }) => {
        this.readMe = marked(data, {
          gfm: true,
          langPrefix: 'hljs ',
          highlight (code) {
            return hljs.highlightAuto(code, ['javascript', 'html']).value
          }
        })
      })
  }
}
</script>

<style scoped>
.header-label {
  color: #fff;
}
</style>

