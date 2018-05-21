<template>
  <v-layout column>
    <v-flex xs12>
      <v-jumbotron dark height="275px">
        <v-container fill-height>
          <v-layout align-center>
            <v-flex text-xs-center>
              <h3 class="display-3">Simply_Valid v{{ version }}</h3>
              <badges :module="'simply_valid'"></badges>
              <h3>
                A data driven validation library with built in
                functionality for easy checks to make sure data is valid before going anywhere.
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
          <v-flex xs12 sm6>
            <v-card height="100%">
              <v-card-title>
                <h1>Schema</h1>
              </v-card-title>
              <v-card-text>
                <p>
                  Schema is an option built into the Simply Valid module which
                  defines how the validation process will run against the values passed to the function.
                  Schema accepts either an <code>Object</code>, <code>Array</code>, or <code>String</code>
                </p>
                <h3>Using Arrays</h3>
                <pre v-highlightjs>
                <code class="javascript">
                  import simplyValid from 'simply_valid';

                  const validate = simplyValid({
                    schema: ['hasValue', 'hasLetters']
                  });
                </code>
                </pre>
                <h3>Using An Object</h3>
                <pre v-highlightjs>
                <code class="javascript">
                  import simplyValid from 'simply_valid';

                  const validate = simplyValid({
                    schema: {
                      zip: 'isZip',
                      address: ['hasLetters', 'hasNumbers']
                    }
                  });
                  // A nested object
                  const validate = simplyValid({
                    schema: {
                      zip: 'isZip',
                      address: ['hasLetters', 'hasNumbers'],
                      info: {
                        code: ['isNumber']
                      }
                    }
                  });
                </code>
                </pre>
                <h3>Using A String</h3>
                <pre v-highlightjs>
                <code class="javascript">
                  import simplyValid from 'simply_valid';

                  const validate = simplyValid({
                    schema: 'hasValue'
                  });
                </code>
                </pre>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6>
            <v-card>
              <v-card-title>
                <h1>Return</h1>
              </v-card-title>
              <v-card-text>
                <p>
                  Depending on how it's being used, Simply Valid will return an object containing some
                  kind of the following
                </p>
                <h3>Passing Return</h3>
                <pre v-highlightjs>
                <code class="javascript">
                  {
                    isValid: true,
                    story: []
                  }
                </code>
                </pre>
                <h3>Failing Returns</h3>
                <pre v-highlightjs>
                <code class="javascript">
                  {
                    isValid: false,
                    story: [{
                      test: 'isNumber',
                      value: 'cool'
                    }]
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
import { name, version } from 'simply_valid/package.json';
import badges from '../../components/badge';
import docs from 'simply_valid/docs.js';
import methodDocs from '../../components/method-docs';

export default {
  components: {
    'method-docs': methodDocs,
    badges
  },
  head: {
    title: 'Simply Valid'
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

