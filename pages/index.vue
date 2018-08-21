<template>
  <v-layout class="single" align-center justify-center column>
    <v-layout align-center justify-end column>
      <h1 class="display-2">Dusty Codes</h1>
      <h2 class="headline">Portfolio &amp; Documentation website</h2>
    </v-layout>
    <v-layout align-start justify-center row>
      <v-tooltip bottom>
        <v-btn
          class="pa-2"
          color="secondary"
          large
          :to="'/portfolio'"
          slot="activator">
          <span class="headline">Portfolio</span>
        </v-btn>
        <span>Go to the documentation portal</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn
          class="pa-2"
          color="secondary"
          large
          :to="'/documentation'"
          slot="activator">
          <span class="headline">Documentation</span>
        </v-btn>
        <span>Go to the documentation portal</span>
      </v-tooltip>
    </v-layout>
  </v-layout>
</template>

<style scoped>
  .single {
    height: 100%;
  }
  h1, h2 {
    color: #FFF;
  }
</style>

