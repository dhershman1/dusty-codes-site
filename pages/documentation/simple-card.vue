<template>
  <v-layout column>
    <v-flex xs12>
      <v-jumbotron dark height="275px">
        <v-container fill-height>
          <v-layout align-center>
            <v-flex text-xs-center>
              <h3 class="display-3">Simple-Card v{{ version }}</h3>
              <badges :module="'simple-card'"></badges>
              <h3>
                A credit card validation system that uses a luhn algorithm to strictly ensure the data
                is accurate and valid
              </h3>
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
              <v-card-title>
                <h1>Return</h1>
              </v-card-title>
              <v-card-text>
                <h3>Full Validation Return</h3>
                <pre v-highlightjs>
                <code class="javascript">
                  {
                    isValid: true,
                    cardType: 'visa',
                    cvnType: 'norm',
                    isExpired: false,
                    match: 'cvn matches card type'
                  }
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
import { name, version } from 'simple-card/package.json';
import badges from '../../components/badge';
import docs from 'simple-card/docs.js';
import methodDocs from '../../components/method-docs';

export default {
  components: {
    'method-docs': methodDocs,
    badges
  },
  head: {
    title: 'Simple Card'
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

