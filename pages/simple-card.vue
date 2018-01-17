<template>
  <v-layout column>
    <v-card>
      <module-header
        :title="name"
        :version="version"
        @goBack="back = !back"></module-header>
      <v-card-text>
        <p>
          Simple card is a credit card validation system that uses a luhn algorithm to strictly ensure the data passed
          in are valid card numbers, while also giving you extra bits of information to help make life a bit easier.
        </p>
        <page :docs="docs" :back="back">
          <v-layout row slot="base">
            <v-flex sm12 md6>
              <h1>Single Data Pieces</h1>
              <p>
                You can send in individual data strings to validate that piece of data automatically
              </p>
              <h3>Example</h3>
              <pre v-highlightjs>
                <code class="javascript">
                  import simpleCard from 'simple-card';

                  const validNumber = simpleCard('4122027811098688');
                  // Output: {isValid: true, info: 'visa'}
                  const validCVN = simpleCard('333');
                  // Output: {isValid: true, info: 'norm'}
                  const validCVN = simpleCard('4444');
                  // Output: {isValid: true, info: 'amex'}
                  const validDate = simpleCard('08/20');
                  // Output: {isValid: true, info: false}
                </code>
              </pre>
            </v-flex>
            <v-flex sm12 md6>
              <h1>Return</h1>
              <p>
                Depending on how it's being used, the return from Simple Card can vary
              </p>
              <h3>Full Validation Return</h3>
              <pre v-highlightjs>
                <code class="javascript">
                  {
                    isValid: true,
                    cardType: 'visa',
                    cvnType: 'norm',
                    expired: false
                  }
                </code>
              </pre>
              <h3>Parital Object Validation Return</h3>
              <pre v-highlightjs>
                <code class="javascript">
                  // If you send in a partial card obj it will always return back invalid
                  // But it will try it's best to figure out the info
                  // Below is a return from just a card number and an expiration no CVN/CVV
                  {
                    isValid: false,
                    cardType: 'visa',
                    cvnType: 'Invalid CVN Code',
                    expired: false
                  }
                </code>
              </pre>
              <h3>Single Data Validation</h3>
              <pre v-highlightjs>
                <code class="javascript">
                  // The info prop varies on what you're validating
                  {
                    isValid: true,
                    info: 'visa'
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
import docs from 'simple-card/docs.js';
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

