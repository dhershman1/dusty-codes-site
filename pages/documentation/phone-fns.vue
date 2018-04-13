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
              <v-btn flat @click="currDisplay = 'info'" v-if="currDisplay === 'methods'">
                <v-icon v-html="'info'"></v-icon> <h3>View Info</h3>
              </v-btn>
              <v-btn flat @click="currDisplay = 'methods'" v-else>
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
            <v-card>
              <v-card-title>
                <h1>Formatting</h1>
              </v-card-title>
              <v-card-text>
                <p>
                  Formatting allows for custom phone formats however you see fit, or whatever your use case is.
                  These offer a nice more dynamic approach than being limited to a few formats from my previous module
                </p>
                <v-list two-line subheader>
                  <v-subheader>Format Letter Codes</v-subheader>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>A</v-list-tile-title>
                      <v-list-tile-sub-title>
                        Area Code Number (Usually the first three numbers)</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>L</v-list-tile-title>
                      <v-list-tile-sub-title>
                        Local Code Number (Usually the middle three numbers)</v-list-tile-sub-title>
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

                    // Without a country code
                    format('', '(AAA) LLL-NNNN', '4443332222'); // => '(444) 333-2222'

                    // With a country code
                    format('112', 'CCC + (AAA)-LLL.NNNN', '4443332222'); // => '112 + (444)-333.2222'

                    // Extensions
                    format('', '(AAA).LLL.NNNN x EEEE', '44433322228989'); // => '(444).333.2222 x 8989'
                  </code>
                </pre>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md6>
            <v-card height="100%">
              <v-card-title>
                <h1>Usage</h1>
              </v-card-title>
              <v-card-text>
                <p>
                  In v1.0.0 of Phone-Fns the main import is used to create separate
                  instances in order to make usage easier as well as the library smaller.
                </p>
                <h3>Example</h3>
                <pre v-highlightjs>
                  <code class="javascript">
                    import phoneFns from 'phone-fns';

                    const phoneLib = phoneFns();

                    phoneLib.breakdown('4443332222');
                    // => { countryCode: '', areaCode: '444', localCode: '333', lineNumber: '2222', extension: '' }

                    phoneLib.format('(AAA) LLL-NNNN', '4443332222');
                    // => '(444) 333-2222'
                  </code>
                </pre>
                <p>
                  If you want to set a country code you can create an instance of the library around
                  the country code like so.
                </p>
                <pre v-highlightjs>
                  <code class="javascript">
                    import phoneFns from 'phone-fns';

                    const phoneLib = phoneFns('1');

                    phoneLib.breakdown('4443332222');
                    // => { countryCode: '1', areaCode: '444', localCode: '333', lineNumber: '2222', extension: '' }

                    phoneLib.format('C + (AAA) LLL-NNNN', '4443332222');
                    // => '1 + (444) 333-2222'
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
import { name, version } from 'phone-fns/package.json';
import badges from '../../components/badge';
import docs from 'phone-fns/docs.js';
import methodDocs from '../../components/method-docs';

export default {
  components: {
    'method-docs': methodDocs,
    badges
  },
  head: {
    title: 'Phone Fns'
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

