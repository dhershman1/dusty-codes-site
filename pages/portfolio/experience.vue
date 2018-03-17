<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <page-header
          :title="'Experience'"
          :summary="'A list of job experiences I have'"></page-header>
      </v-flex>
      <v-flex
        xs12
        v-for="j in jobs"
        :key="j.company">
        <exp-card :job="j"></exp-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import expCard from '../../components/cards/exp';
import pageHeader from '../../components/page-header';

export default {
  components: {
    'page-header': pageHeader,
    'exp-card': expCard
  },
  data() {
    return {
      jobs: [
        {
          company: 'DealerTire LLC.',
          title: 'Software Developer',
          imageName: 'dt.png',
          location: 'Cleveland, OH',
          duration: 'May 2014 - Present',
          tasks: [
            'Managed ColdFusion & JavaScript development projects',
            'Managed migration and creation of new projects in Node.js',
            'Worked in B2B, B2C, & SaaS style of workflow',
            'Lead maintainer of the entire companies IT Standards and Guidelines',
            'Worked on and released several large scale projects'
          ]
        },
        {
          company: 'Case Western Reserve University',
          title: 'Instructor',
          imageName: 'case-western.png',
          location: 'Cleveland, OH',
          duration: 'July 2017 - Present',
          tasks: [
            'Teaching Full Stack Development to students',
            'Topics: HTML, CSS, JavaScript, Node.js, React, MySQL, MongoDB, and light Java'
          ]
        }
      ]
    };
  }
};
</script>

