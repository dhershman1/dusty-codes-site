<template>
  <v-layout column>
    <v-flex xs12>
      <v-jumbotron dark height="275px">
        <v-container fill-height>
          <v-layout align-center>
            <v-flex text-xs-center>
              <h3 class="display-3">Kyanite v{{ version }}</h3>
              <badges :module="'kyanite'"></badges>
              <h3>A tiny library of functional operators and utility helper functionality</h3>
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
          <v-flex xs12 md6>
            <v-card height="100%">
              <v-card-title>
                <h1>Split Methods</h1>
              </v-card-title>
              <v-card-text>
                <p>
                  Each method is importable by itself or desturctured from the main object.
                  The benefit to being split up
                  and importable individually is this helps out with tree shaking and only using the functionality you
                  need at that time.
                </p>
                <h3>Standard JS</h3>
                <pre v-highlightjs>
                <code class="javascript">
import isEmpty from 'kyanite/isEmpty';

isEmpty({});
                </code>
                </pre>
                <h3>CommonJS</h3>
                <pre v-highlightjs>
                <code class="javascript">
const isEmpty = require('kyanite/isEmpty');

isEmpty({});
                </code>
                </pre>
                <h3>CDN</h3>
                <pre v-highlightjs>
                <code class="html">
&lt;script src="https://cdn.jsdelivr.net/npm/kyanite@{{ version }}/isEmpty.js"&gt;&lt;/script&gt;
&lt;script&gt;
  isEmpty({});
&lt;/script&gt;
                </code>
                </pre>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md6>
            <v-card>
              <v-card-title>
                <h1>Usage</h1>
              </v-card-title>
              <v-card-text>
                <p>
                  Standard Usage of the main Kyanite min file while being able to bring in the functionality individually
                  you can also bring in the entire library itself and access the functions from the
                  <code>kyanite</code> Object. Example: <code>kyanite.isEmpty()</code>
                </p>
                <h3>Standard JS</h3>
                <pre v-highlightjs>
                <code class="javascript">
import k from 'kyanite';

k.isEmpty({});
                </code>
                </pre>
                <h3>CommonJS</h3>
                <pre v-highlightjs>
                <code class="javascript">
const k = require('kyanite');

k.isEmpty({});
                </code>
                </pre>
                <h3>CDN</h3>
                <pre v-highlightjs>
                <code class="html">
&lt;script src="https://cdn.jsdelivr.net/npm/kyanite@{{ version }}/kyanite.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
  kyanite.isEmpty({});
&lt;/script&gt;
                </code>
                </pre>
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
import { name, version } from 'dusty-fns/package.json';
import badges from '../../components/badge';
import docs from 'dusty-fns/docs.js';
import methodDocs from '../../components/method-docs';

export default {
  components: {
    'method-docs': methodDocs,
    badges
  },
  head: {
    title: 'Kyanite'
  },
  data() {
    return {
      name,
      version,
      docs,
      currDisplay: 'info'
    };
  }
};
</script>

