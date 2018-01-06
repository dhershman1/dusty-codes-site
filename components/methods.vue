<template>
  <v-card>
    <v-toolbar color="indigo" dark>
      <v-toolbar-title>Methods</v-toolbar-title>
      <v-text-field
        class="px-2"
        prepend-icon="search"
        hide-details
        v-model.trim="search"
        placeholder="Search"
        single-line></v-text-field>
    </v-toolbar>
    <v-list two-line>
      <v-list-tile
        :key="i"
        v-for="(item, i) in filteredDocs"
        @click="toTop(item)"
        :class="{ 'active': item.title === activeItem }"
      >
        <v-list-tile-content>
          <v-list-tile-title
          v-text="item.title" />
          <v-list-tile-sub-title v-text="item.desc" />
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
import fuzzysearch from 'fuzzysearch';

export default {
  props: {
    docs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      search: '',
      activeItem: '',
      filteredDocs: this.docs
    };
  },
  methods: {
    toTop(item) {
      this.$router.push({hash: ''});
      window.scrollTo(0, 0);
      this.$emit('switchMethod', item);
      this.activeItem = item.title;
    }
  },
  watch: {
    search(val) {
      if (!val) {
        this.filteredDocs = this.methodList;
      } else {
        this.filteredDocs = this.methodList.filter(({ title }) => fuzzysearch(val, title));
      }
    }
  },
  computed: {
    methodList() {
      return this.docs.map(({ title, desc }) => ({
        title,
        desc
      }));
    }
  }
};
</script>

<style scoped>
.active {
  background-color: #3F51B5;
  color: #FFF;
}

.active .list__tile__sub-title {
  color: #FFF;
}
</style>

