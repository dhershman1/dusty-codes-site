<template>
  <v-layout column>
    <v-card>
      <module-header
        :title="name"
        :version="version"
        @goBack="back = !back"></module-header>
      <v-card-text>
        <p>
          Simply Valid is a data driven validation library with built in
          functionality for easy checks to make sure data is valid before going anywhere.
        </p>
        <page :docs="docs" :back="back">
          <v-layout row slot="base">
            <v-flex sm12 md6>
              <h1>Schema</h1>
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
                      zip: 'isNumber',
                      address: ['hasLetters', 'hasNumbers']
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
            </v-flex>
            <v-flex sm12 md6>
              <h1>Return</h1>
              <p>
                Depending on how it's being used, Simply Valid will return an object containing some
                kind of the following
              </p>
              <h3>Passing Returns</h3>
              <pre v-highlightjs>
                <code class="javascript">
                  // Default passing object
                  { isValid: true }

                  // For passing object validation
                  {
                    isValid: true,
                    story: []
                  }
                </code>
              </pre>
              <h3>Failing Returns</h3>
              <pre v-highlightjs>
                <code class="javascript">
                  // This is the default failing object
                  {
                    isValid: false,
                    story: [{
                      test: 'isNumber',
                      value: 'cool'
                    }]
                  }
                  // For failing object validation
                  {
                    isValid: false,
                    story: [ {
                      test: 'isNumber',
                      value: 'cool',
                      propName: 'zip'
                      } ]
                  }
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
import { name, version } from 'simply_valid/package.json';
import docs from 'simply_valid/docs.js';
import header from '../components/header';
import pageTemplate from '../components/page-template';

export default {
  components: {
    'module-header': header,
    'page': pageTemplate
  },
  head: {
    title: 'Simply Valid'
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

