<template>
  <v-card>
    <v-card-actions v-if="link">
      <v-spacer></v-spacer>
      <a
        :href="link"
        target="_blank"
        :aria-label="`Go to ${name} website`"
        class="project-link">
        <v-icon color="primary">launch</v-icon>
      </a>
    </v-card-actions>

    <v-card-title primary-title>
      <img
        class="pr-2"
        :src="`/${imageName}`"
        :alt="imageName">
      <div>
        <h3>
          {{ name }}
        </h3>
        <div>
          <i>{{ stack }}</i>
        </div>
        <div>
          {{ summary }}
        </div>
      </div>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <p>
        {{ description }}
      </p>
      <div class="pl-3">
        <h4>Technologies</h4>
        <ul>
          <li v-for="tech in technologies" :key="tech.name" >
            <a :href="tech.link" target="_blank">{{ tech.name }}</a>
          </li>
        </ul>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    link () {
      return this.info.link
    },
    imageName () {
      return this.info.imageName
    },
    name () {
      return this.info.name
    },
    stack () {
      return this.info.stack
    },
    summary () {
      return this.info.summary
    },
    description () {
      return this.info.description
    },
    technologies () {
      return this.info.technologies
    }
  }
}
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
@media screen and (max-width: 599px) {
	ul {
		columns: 1;
		-webkit-columns: 1;
		-moz-columns: 1;
	}
}
@media screen and (min-width: 600px) and (max-width: 1263px) {
	ul {
		columns: 2;
		-webkit-columns: 2;
		-moz-columns: 2;
	}
}
@media screen and (min-width: 1264px) {
	ul {
		columns: 4;
		-webkit-columns: 4;
		-moz-columns: 4;
	}
}
</style>

