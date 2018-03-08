<template>
  <v-layout column>
    <v-card>
      <module-header
        :title="name"
        :version="version"
        @goBack="back = !back"></module-header>
      <v-card-text>
        <p>
          Dusty-fns is a tiny library of functional operators and utility helper functionality
        </p>
        <page :docs="docs" :back="back">
          <v-layout row slot="base">
            <v-flex sm12 md12>
              <h1>Split Methods</h1>
              <p>
                Each method is importable by itself or desturctured from the main object. The benefit to being split up
                and importable individually is this helps out with tree shaking and only using the functionality you
                need at that time.
              </p>
              <h3>Example</h3>
              <pre v-highlightjs>
                <code class="javascript">
                  import isEmpty from 'dusty-fns/isEmpty';

                  isEmpty({});

                  // OR

                  const isEmpty = require('dusty-fns/isEmpty');

                  isEmpty({});
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
import docs from 'dusty-fns/docs.js';
import header from '../components/header';
import pageTemplate from '../components/page-template';

export default {
  components: {
    'module-header': header,
    'page': pageTemplate
  },
  data() {
    return {
      name,
      version,
      docs,
      back: false
    };
  }
};
</script>

