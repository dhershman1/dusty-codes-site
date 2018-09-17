<template>
  <v-card>
    <v-card-title primary-title>
      <img
        class="pr-2"
        :src="imageName"
        :alt="`Image for ${company}`">
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
    info: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    imageName () {
      return this.info.imageName
    },
    company () {
      return this.info.company
    },
    title () {
      return this.info.title
    },
    location () {
      return this.info.location
    },
    duration () {
      return this.info.duration
    },
    tasks () {
      return this.info.tasks
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
