<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex class="page-header" xs12 text-xs-center>
        <h1 class="display-3">Projects</h1>
      </v-flex>
      <v-flex :key="'apps'" xs12 md6></v-flex>
      <v-flex :key="'libs'" xs12 md6></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import projCard from '../../components/cards/project'

export default {
  components: {
    projects: projCard
  }
}
</script>

