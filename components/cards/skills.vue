<template>
  <v-card>
    <v-card-actions v-if="link">
      <v-spacer></v-spacer>
      <a :href="link" target="_blank" class="project-link">
        <v-icon color="primary">launch</v-icon>
      </a>
    </v-card-actions>
    <v-card-title primary-title>
      <v-container fluid grid-list-lg>
        <v-layout row>
          <v-flex xs8>
            <img
              :src="'/imgs/' + img"
              class="pr-2"
              :alt="img">
            <div>
              <h3>{{ name }}</h3>
              <div>
                {{ summary }}
                <p><strong>Versions: {{ versions }}</strong></p>
              </div>
            </div>
          </v-flex>
          <v-flex xs4>
            <div>
              <v-progress-circular
                :size="150"
                :width="15"
                :rotate="360"
                :value="convertLvl(level)"
                :color="getColor(level)">
                {{ level }}
              </v-progress-circular>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-title>

    <div v-if="libraries">
      <v-divider></v-divider>
      <v-card-text>
        <div>
          <h2 class="pb-2">{{ name }} Libraries</h2>
          <v-card class="ml-5" v-for="f in libraries" :key="f.name">
            <v-card-actions v-if="f.link">
              <v-spacer></v-spacer>
              <a :href="f.link" target="_blank" class="project-link">
                <v-icon color="primary">launch</v-icon>
              </a>
            </v-card-actions>
            <v-card-title primary-title>
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs8>
                    <img
                      :src="'/imgs/' + f.img"
                      class="pr-2"
                      :alt="f.img">
                    <div>
                      <h3>{{ f.name }}</h3>
                      <div>
                        {{ f.summary }}
                        <strong><p class="mb-0" v-if="f.type">Type: {{ f.type }}</p>
                        <p>Versions: {{ f.versions.join(', ') }}</p></strong>
                      </div>
                    </div>
                  </v-flex>
                  <v-flex xs4>
                    <div class="pl-5">
                      <v-progress-circular
                        :size="120"
                        :width="15"
                        :rotate="360"
                        :value="convertLvl(f.level)"
                        :color="getColor(f.level)">
                        {{ f.level }}
                      </v-progress-circular>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-title>
            <v-divider></v-divider>
          </v-card>
        </div>
      </v-card-text>
    </div>

    <div v-if="frameworks">
      <v-divider></v-divider>
      <v-card-text>
        <div>
          <h2 class="pb-2">{{ name }} Frameworks</h2>
          <v-card class="ml-5" v-for="f in frameworks" :key="f.name">
            <v-card-actions v-if="f.link">
              <v-spacer></v-spacer>
              <a :href="f.link" target="_blank" class="project-link">
                <v-icon color="primary">launch</v-icon>
              </a>
            </v-card-actions>
            <v-card-title primary-title>
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs8>
                    <img
                      :src="'/imgs/' + f.img"
                      class="pr-2"
                      :alt="f.img">
                    <div>
                      <h3>{{ f.name }}</h3>
                      <div>
                        {{ f.summary }}
                        <strong><p class="mb-0" v-if="f.type">Type: {{ f.type }}</p>
                        <p>Versions: {{ f.versions.join(', ') }}</p></strong>
                      </div>
                    </div>
                  </v-flex>
                  <v-flex xs4>
                    <div class="pl-5">
                      <v-progress-circular
                        :size="120"
                        :width="15"
                        :rotate="360"
                        :value="convertLvl(f.level)"
                        :color="getColor(f.level)">
                        {{ f.level }}
                      </v-progress-circular>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-title>
            <v-divider></v-divider>
          </v-card>
        </div>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => ({
        name: 'Uh Oh',
        summary: 'Something went wrong getting skills',
        versions: [],
        level: 0
      })
    }
  },
  methods: {
    getColor(lvl) {
      const colors = {
        beginner: 'red',
        novice: 'orange',
        intermediate: 'amber',
        professional: 'green',
        expert: 'primary'
      };

      return colors[lvl.toLowerCase()];
    },
    convertLvl(lvl) {
      const percents = {
        beginner: 20,
        novice: 40,
        intermediate: 60,
        professional: 80,
        expert: 100
      };

      return percents[lvl.toLowerCase()];
    }
  },
  computed: {
    img() {
      return this.info.img;
    },
    name() {
      return this.info.name;
    },
    summary() {
      return this.info.summary;
    },
    versions() {
      return this.info.versions.join(', ');
    },
    level() {
      return this.info.level;
    },
    libraries() {
      return this.info.libraries;
    },
    frameworks() {
      return this.info.frameworks;
    },
    link() {
      return this.info.link;
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
.project-link {
  text-decoration: none;
}
ul {
  list-style-type: none;
}
</style>
