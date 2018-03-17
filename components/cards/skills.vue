<template>
  <v-card>
    <v-card-title primary-title>
      <img
        class="pr-2"
        :src="'/' + imageName"
        :alt="imageName">
      <div>
        <h3>{{ company }}</h3>
        <div>
          {{ title }}
          <p>{{ location }}</p>
          <p><i>{{ duration }}</i></p>
        </div>
      </div>
    </v-card-title>

    <v-divider></v-divider>
    <v-card-text>
      <div class="pl-3">
        <h4>Responsibilities</h4>
        <ul>
          <li v-for="t in tasks" :key="t" >
            {{ t }}
          </li>
        </ul>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    imageName() {
      return this.job.imageName;
    },
    company() {
      return this.job.company;
    },
    title() {
      return this.job.title;
    },
    location() {
      return this.job.location;
    },
    duration() {
      return this.job.duration;
    },
    tasks() {
      return this.job.tasks;
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
