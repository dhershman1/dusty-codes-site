<template>
  <v-layout column>
    <v-flex xs12>
      <v-jumbotron dark height="275px">
        <v-container fill-height>
          <v-layout align-center>
            <v-flex text-xs-center>
              <h3 class="display-3">Phone-Fns v{{ version }}</h3>
              <badges :module="'phone-fns'"></badges>
              <h3>A tiny library of utility functions based that make working with phone numbers easier</h3>
              <v-btn light @click="currDisplay = 'info'" v-if="currDisplay === 'methods'">
                <v-icon v-html="'info'"></v-icon> <h3>View Info</h3>
              </v-btn>
              <v-btn light @click="currDisplay = 'methods'" v-else>
                <v-icon v-html="'description'"></v-icon> <h3>View Methods</h3>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
      <transition name="slide-fade" mode="out-in">
        <v-layout
          row
          wrap
          v-if="currDisplay === 'info'"
          :key="'info'">
          <v-flex xs12>
            <v-card height="100%">
              <v-card-text class="readme" v-html="readMe">
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row v-else :key="'docs'">
          <method-docs :docs="docs"></method-docs>
        </v-layout>
      </transition>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
import marked from 'marked'
import hljs from 'highlight.js'
import badges from '../../components/badge'
import methodDocs from '../../components/method-docs'

export default {
  components: {
    methodDocs,
    badges
  },
  head: {
    title: 'Phone Fns'
  },
  asyncData ({ store }) {
    return axios.get('https://cdn.jsdelivr.net/npm/phone-fns@latest/info.json')
      .then(({ data }) => {
        return Object.assign({}, data, { currDisplay: 'info', readMe: '' })
      })
      .catch(() => ({
        name: 'phone-fns',
        version: '0.0.0',
        docs: [],
        currDisplay: 'info'
      }))
  },
  mounted () {
    axios.get('https://cdn.jsdelivr.net/npm/phone-fns@latest/README.md')
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
};
</script>

