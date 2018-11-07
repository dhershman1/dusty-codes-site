<template>
  <span>
    <v-navigation-drawer
      class="hidden-md-and-up"
      app
      :clipped="clipped"
      :value="drawer"
      floating
      temporary>
      <v-toolbar color="primary" dark>
        <v-toolbar-title>Methods</v-toolbar-title>
        <v-text-field
          class="px-2"
          prepend-icon="search"
          hide-details
          v-model.trim.lazy="search"
          aria-label="Search for a Method"
          placeholder="Search"
          label="Search"
          single-line></v-text-field>
        <v-toolbar-items>
          <v-btn @click="switchMethodStyle" flat>
            Display: {{ methodStyle | capitalize }}
          </v-btn>
        </v-toolbar-items>
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
              <span class="deprecated ml-1" v-if="item.deprecated">
                <v-icon small color="black">warning</v-icon>
                Deprecated
              </span>
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
          v-model.trim.lazy="search"
          placeholder="Search"
          color="accent"
          single-line></v-text-field>
        <v-btn @click="switchMethodStyle" flat>
          Display: {{ methodStyle | capitalize }}
        </v-btn>
      </v-toolbar>
      <v-list two-line>
        <v-list-tile
          v-for="(item, i) in filteredDocs"
          :href="`#${item.title}`"
          :key="i"
          @click="toTop(item)"
          :class="{ 'active': item.title === activeItem }"
        >
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.title }}
              <span class="category ml-1" v-if="item.category">{{ item.category }}</span>
              <span class="deprecated ml-1" v-if="item.deprecated">
                <v-icon small color="black">warning</v-icon>
                Deprecated
              </span>
            </v-list-tile-title>
            <v-list-tile-sub-title v-text="item.desc" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </span>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { capitalize } from 'kyanite'

export default {
  filters: {
    capitalize
  },
  data () {
    return {
      clipped: false,
      search: '',
      activeItem: '',
      filteredDocs: []
    }
  },
  methods: {
    ...mapMutations(['switchMethodStyle', 'toggleDrawer', 'closeDrawer']),
    ...mapMutations('docs', ['selectMethod']),
    toTop (item) {
      this.$router.push({ hash: '' })
      window.scrollTo({
        top: 150,
        behavior: 'smooth'
      })

      this.closeDrawer()
      this.selectMethod(item)
      this.activeItem = item.title
    }
  },
  watch: {
    search (val) {
      if (!val) {
        this.filteredDocs = this.sortedDocs
      } else {
        this.filteredDocs = this.filterDocs(val)
      }
    }
  },
  computed: {
    ...mapState(['methodStyle', 'drawer']),
    ...mapGetters('docs', ['filterDocs', 'sortedDocs'])
  },

  mounted () {
    this.activeItem = this.sortedDocs[0].title
    this.filteredDocs = this.sortedDocs
  }
}
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

.deprecated {
  background-color: #aa2e2e;
  margin-left: 0.3rem;
  color: #000;
  font-weight: bold;
  padding: 0.3rem;
  border-radius: 0.5rem;
}

.active {
  background-color: #2b5994;
  color: #FFF;
}

.active .v-list__tile__sub-title {
  color: #FFF;
}
</style>

