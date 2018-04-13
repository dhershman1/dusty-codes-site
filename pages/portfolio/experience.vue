<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <page-header
          :title="'Experience'"
          :summary="'All the experiences I have had'"></page-header>
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
  head: {
    title: 'Experience'
  },
  data() {
    return {
      jobs: [
        {
          company: 'DealerTire LLC.',
          title: 'Software Developer',
          imageName: 'imgs/dt.png',
          location: 'Cleveland, OH',
          duration: 'May 2014 - Present',
          tasks: [
            'Worked in both Coldfusion and JavaScript applications',
            'Working heavily in projects using Node.js and newer technologies',
            'Working in a B2C style of web application',
            'Also have worked on B2B style applications in the past',
            'Created the ground work for a lot of the IT standards and guidelines'
          ]
        },
        {
          company: 'Case Western Reserve University',
          title: 'Instructor',
          imageName: 'imgs/case-western.png',
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

