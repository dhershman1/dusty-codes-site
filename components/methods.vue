<template>
  <span>
    <v-navigation-drawer
      class="hidden-md-and-up"
      app
      :clipped="clipped"
      v-model="drawer"
      floating
      temporary>
      <v-toolbar color="primary" dark>
        <v-toolbar-title>Methods</v-toolbar-title>
        <v-text-field
          class="px-2"
          prepend-icon="search"
          hide-details
          v-model.trim.lazy="search"
          placeholder="Search"
          label="Search"
          single-line></v-text-field>
      </v-toolbar>
      <v-list>
        <v-list-tile
          :key="i"
          v-for="(item, i) in filteredDocs"
          @click="toTop(item)"
          :class="{ 'active': item.title === activeItem }"
        >
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.title }}
              <span class="category ml-1" v-if="item.category">{{ item.category }}</span>
            </v-list-tile-title>
            <v-list-tile-title v-text="item.desc"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-card class="hidden-sm-and-down">
      <v-toolbar color="primary" dark>
        <v-toolbar-title>Methods</v-toolbar-title>
        <v-text-field
          class="px-2"
          prepend-icon="search"
          hide-details
          v-model.trim="search"
          placeholder="Search"
          color="accent"
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
            <v-list-tile-title>
              {{ item.title }}
              <span class="category ml-1" v-if="item.category">{{ item.category }}</span>
            </v-list-tile-title>
            <v-list-tile-sub-title v-text="item.desc" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </span>
</template>

<script>
import fuzzysearch from 'dusty-fns/fuzzySearch';

export default {
  props: {
    drawer: {
      type: Boolean,
      default: false
    },
    docs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      clipped: false,
      search: '',
      activeItem: this.docs[0].title,
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
        this.filteredDocs = this.methodList.filter(({ title, category }) =>
          fuzzysearch(title.toLowerCase(), val.toLowerCase()) ||
          fuzzysearch(category.toLowerCase(), val.toLowerCase()));
      }
    }
  },
  computed: {
    methodList() {
      return this.docs.map(({ title, desc, category }) => ({
        title,
        category,
        desc
      }));
    }
  }
};
</script>

<style scoped>
.category {
  background-color: #a4b1fc;
  color: #000;
  font-weight: bold;
  padding: 0.3rem;
  text-align: right;
  border-radius: 0.5rem;
}

.active {
  background-color: #2b5994;
  color: #FFF;
}

.active .list__tile__sub-title {
  color: #FFF;
}
</style>

