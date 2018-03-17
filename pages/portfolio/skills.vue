<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <page-header
          :title="'Skills'"
          :summary="'A list of skills and my level of knowledge in them'"></page-header>
      </v-flex>
      <h2>Skills is currently a work in progress</h2>
      <!-- <v-flex
        xs12
        v-for="s in skills"
        :key="s.name">
        <skill-card :info="s"></skill-card>
      </v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>
import pageHeader from '../../components/page-header';
import skillCard from '../../components/cards/skills';

export default {
  components: {
    'page-header': pageHeader,
    'skill-card': skillCard
  },
  data() {
    return {
      skills: []
    };
  }
};
</script>

