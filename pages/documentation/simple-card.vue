<template>
  <v-layout column>
    <v-card>
      <module-header
        :title="name"
        :version="version"
        @goDocs="currDisplay = 'docs'"
        @goInfo="currDisplay = 'info'"></module-header>
      <v-card-text>
        <badges :module="'simple-card'"></badges>
        <br/>
        <p>
          Simple card is a credit card validation system that uses a luhn algorithm to strictly ensure the data passed
          in are valid card numbers, while also giving you extra bits of information to help make life a bit easier.
        </p>
        <page :docs="docs" :display="currDisplay">
          <v-layout row slot="base">
            <v-flex sm12 md12>
              <h1>Return</h1>
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
            </v-flex>
          </v-layout>
        </page>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import { name, version } from 'simple-card/package.json';
import badges from '../../components/badge';
import docs from 'simple-card/docs.js';
import header from '../../components/header';
import pageTemplate from '../../components/page-template';

export default {
  components: {
    'module-header': header,
    'page': pageTemplate,
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

