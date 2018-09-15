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
        <v-tab @click="currDisplay = 'readme'">
          Readme
          <v-icon>info</v-icon>
        </v-tab>
        <v-tab v-if="changelog" @click="currDisplay = 'changelog'">
          Changelog
          <v-icon>assignment</v-icon>
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
          v-if="currDisplay === 'readme' || currDisplay === 'changelog'"
          :key="'readme'">
          <v-flex xs12>
            <v-card height="100%">
              <v-card-text class="readme" v-html="currDisplay === 'readme' ? readMe : changelog" />
            </v-card>
          </v-flex>
        </v-layout>
        <method-docs v-else :docs="docs" :key="'docs'" />
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
    const cl = params.module === 'kyanite' ? 'CHANGELOG' : 'changelog'

    return Promise.all([
      axios.get(`https://cdn.jsdelivr.net/npm/${params.module}@latest/README.md`),
      axios.get(`https://cdn.jsdelivr.net/npm/${params.module}@latest/${cl}.md`),
      axios.get(`https://cdn.jsdelivr.net/npm/${params.module}@latest/info.json`)
    ]).then(([readme, changelog, info]) => {
      const rmHtml = marked(readme.data, {
        gfm: true,
        langPrefix: 'hljs ',
        highlight (code) {
          return hljs.highlightAuto(code, ['javascript', 'html']).value
        }
      })
      const clHtml = marked(changelog.data)

      return Object.assign({ name: params.module }, info.data, {
        currDisplay: 'readme',
        readMe: rmHtml,
        changelog: clHtml
      })
    }).catch(() => ({
      name: params.module,
      version: '0.0.0',
      docs: [],
      currDisplay: 'readme'
    }))
  }
}
</script>

<style scoped>
.header-label {
  color: #fff;
}
</style>

