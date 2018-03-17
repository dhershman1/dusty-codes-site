<template>
  <v-card :to="dest">
    <v-card-media
      class="white--text"
      height="200px"
      :src="imgSrc"
    >
    </v-card-media>
    <v-card-title>
      <div>
        <h3>{{ headline }}</h3>
        <br>
        <span>{{ description }}</span>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    dest: {
      type: String,
      default: '/'
    },
    imgSrc: {
      type: String,
      default: 'http://via.placeholder.com/350x150'
    },
    headline: {
      type: String,
      default: 'Unknown'
    },
    description: {
      type: String,
      default: 'Short Description'
    }
  }
};
</script>

