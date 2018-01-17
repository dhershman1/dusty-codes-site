<template>
  <v-layout column>
    <v-card>
      <module-header
        :title="name"
        :version="version"
        @goBack="back = !back"></module-header>
      <v-card-text>
        <p>
          Phone-fns is a tiny library of utility functions based that make working with phone numbers easier.
        </p>
        <page :docs="docs" :back="back">
          <v-layout row slot="base">
            <v-flex sm12 md6>
              <h1>Formatting</h1>
              <p>
                Formatting allows for custom phone formats however you see fit, or whatever your use case is.
                These offer a nice more dynamic approach than being limited to a few formats from my previous module
              </p>
              <v-list two-line subheader>
                <v-subheader>Format Letter Codes</v-subheader>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>A</v-list-tile-title>
                    <v-list-tile-sub-title>Area Code Number (Usually the first three numbers)</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>L</v-list-tile-title>
                    <v-list-tile-sub-title>Local Code Number (Usually the middle three numbers)</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>N</v-list-tile-title>
                    <v-list-tile-sub-title>Line Number (Usually the last four numbers)</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>E</v-list-tile-title>
                    <v-list-tile-sub-title>Extension Number</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>C</v-list-tile-title>
                    <v-list-tile-sub-title>Country Code Number</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
              <h3>Example</h3>
              <pre v-highlightjs>
                <code class="javascript">
                  import format from 'phone-fns/format';

                  // Normal
                  format('4443332222', '(AAA) LLL-NNNN');
                  // Output: (444) 333-2222

                  // Long Distance
                  format('1124443332222', 'CCC + (AAA)-LLL.NNNN', true); // Notice we have to make sure to tell the module we it is long distance
                  // Output: 112 + (444)-333.2222

                  // Extensions
                  format('44433322228989', '(AAA).LLL.NNNN x EEEE');
                  // Output: (444).333.2222 x 8989
                </code>
              </pre>
            </v-flex>
            <v-flex sm12 md6>
              <h1>Country Codes</h1>
              <p>
                Phone Fns comes built in with a large list of country codes thanks to the
                <a href="https://github.com/mledoze/countries" target="__blank">Countries Repo</a>
                You can bring in and search through the codes. Do note that all the strings are in lower case format
              </p>
              <h3>Example</h3>
              <pre v-highlightjs>
                <code class="javascript">
                  import callingCodes from 'phone-fns/callingCodes';

                  console.log(callingCodes['us']);
                  // Output: [ '1' ]
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
import { name, version } from 'phone-fns/package.json';
import docs from 'phone-fns/docs.js';
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

