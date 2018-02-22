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
              <h1>Changelog</h1>
              <v-card>
                <v-toolbar>
                  <v-toolbar-title>{{ version }}</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-list>

                  <v-list-group no-action>
                    <v-list-tile slot="activator">
                      <v-list-tile-content>
                        <v-list-tile-title>Breaking</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          Removed the ability to send single strings into the main function
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                          You should call the individual functions instead
                        </v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          Removed the ability to send partial objects to the main function
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          Changed the expected card object property name from `expire` to `date`
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list-group>

                  <v-list-group no-action>
                    <v-list-tile slot="activator">
                      <v-list-tile-content>
                        <v-list-tile-title>New</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          Broke each piece of validation into its own callable function
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                          You can still use the `validate` function to run it on an object
                        </v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          Added a match functionality to compare cardtype with cvn
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          Converted to a webpack build process
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          Introduced automated scripts for building and docs generation
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          Type errors will now trigger if an invalid type is given to a function
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          Introduced the ability to call specific functions if desired
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list-group>

                  <v-list-group no-action>
                    <v-list-tile slot="activator">
                      <v-list-tile-content>
                        <v-list-tile-title>Improved</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          The overall source code base removing lots of overhead
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                          Allowing for smaller builds
                        </v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          Better and cleaner organization of the code base
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                          Which allowed for breaking out the functionality
                        </v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>
                          Improved the overall size of the library
                        </v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list-group>

                </v-list>
              </v-card>

            </v-flex>
            <v-flex sm12 md6>
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

