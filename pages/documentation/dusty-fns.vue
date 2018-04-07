<template>
  <v-layout column>
    <v-card>
      <module-header
        :title="name"
        :version="version"
        @goDocs="currDisplay = 'docs'"
        @goInfo="currDisplay = 'info'"></module-header>
      <v-card-text>
        <badges :module="'dusty-fns'"></badges>
        <br/>
        <p>
          Dusty-fns is a tiny library of functional operators and utility helper functionality
        </p>
        <page :docs="docs" :display="currDisplay">
          <v-layout row slot="base">
            <v-flex sm12 md6>
              <h1>Usage</h1>
              <p>
                Standard Usage of the main dusty min file while being able to bring in the functionality individually
                you can also bring in the entire library itself and access the functions from the
                <code>dusty</code> Object. Example: <code>dusty.isEmpty()</code>
              </p>
              <h3>Standard JS</h3>
              <pre v-highlightjs>
                <code class="javascript">
import dusty from 'dusty-fns';

dusty.isEmpty({});
                </code>
              </pre>
              <h3>CommonJS</h3>
              <pre v-highlightjs>
                <code class="javascript">
const dusty = require('dusty-fns');

dusty.isEmpty({});
                </code>
              </pre>
              <h3>CDN</h3>
              <pre v-highlightjs>
                <code class="html">
&lt;script src="https://cdn.jsdelivr.net/npm/dusty-fns@{{ version }}/dusty.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
  dusty.isEmpty({});
&lt;/script&gt;
                </code>
              </pre>
            </v-flex>
            <v-flex sm12 md6>
              <h1>Split Methods</h1>
              <p>
                Each method is importable by itself or desturctured from the main object. The benefit to being split up
                and importable individually is this helps out with tree shaking and only using the functionality you
                need at that time.
              </p>
              <h3>Standard JS</h3>
              <pre v-highlightjs>
                <code class="javascript">
import isEmpty from 'dusty-fns/isEmpty';

isEmpty({});
                </code>
              </pre>
              <h3>CommonJS</h3>
              <pre v-highlightjs>
                <code class="javascript">
const isEmpty = require('dusty-fns/isEmpty');

isEmpty({});
                </code>
              </pre>
              <h3>CDN</h3>
              <pre v-highlightjs>
                <code class="html">
&lt;script src="https://cdn.jsdelivr.net/npm/dusty-fns@{{ version }}/isEmpty/index.js"&gt;&lt;/script&gt;
&lt;script&gt;
  isEmpty({});
&lt;/script&gt;
                </code>
              </pre>
            </v-flex>
          </v-layout>
        </page>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import { name, version } from 'dusty-fns/package.json';
import badges from '../../components/badge';
import docs from 'dusty-fns/docs.js';
import header from '../../components/header';
import pageTemplate from '../../components/page-template';

export default {
  components: {
    'module-header': header,
    'page': pageTemplate,
    badges
  },
  head: {
    title: 'Dusty Fns'
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

