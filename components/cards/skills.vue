<template>
  <v-card height="100%">
    <v-card-actions v-if="link">
      <v-spacer></v-spacer>
      <a :href="link" target="_blank" class="project-link">
        <v-icon color="primary">launch</v-icon>
      </a>
    </v-card-actions>
    <v-card-title class="card__main" primary-title>
      <v-flex xs8>
        <img
          :src="'/imgs/' + img"
          :alt="img">
        <div>
          <h3>{{ name }}</h3>
          <p><strong>Versions: {{ versions }}</strong></p>
        </div>
      </v-flex>
      <v-flex xs12 md4>
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
    </v-card-title>
    <v-card-text>
      <div>
        {{ summary }}
      </div>
    </v-card-text>
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
    link() {
      return this.info.link;
    }
  }
};
</script>

<style scoped>
.card__main {
  padding-top: 0;
}
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
