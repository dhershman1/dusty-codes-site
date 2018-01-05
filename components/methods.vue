<template>
  <v-card>
    <v-toolbar color="indigo" dark>
      <v-toolbar-title>Methods</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <v-list-tile
        :key="i"
        v-for="(item, i) in methodList"
        @click="$emit('switchMethod', item)"
      >
        <v-list-tile-content>
          <v-list-tile-title
          v-text="item.name" />
          <v-list-tile-sub-title v-text="item.desc" />
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    docs: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    methodList() {
      return this.docs.map(({ title, desc }) => ({
        name: title,
        desc
      }));
    }
  }
};
</script>
