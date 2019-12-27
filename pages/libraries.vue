<template>
  <a-row type="flex" justify="center" :gutter="16">
    <a-col v-for="(m, i) in libs" :key="i" :span="8">
      <a-card :title="m.title">
        <img :src="m.npmBadge" slot="extra" />
        <badges class="mb" :module="m.title.toLowerCase()" />
        <p>{{ m.description }}</p>
        <template class="ant-card-actions" slot="actions">
          <a title="Github" target="_blank" :href="m.github">
            <a-icon type="github" />
          </a>
          <a title="Documentation" target="_blank" :href="m.href">
            <a-icon type="book" />
          </a>
          <a title="NPM" target="_blank" :href="m.npm">
            <a-icon type="database" />
          </a>
        </template>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import badges from '../components/badge'

export default {
  components: {
    badges
  },

  data () {
    return {
      libs: [
        {
          title: 'Kyanite',
          description: 'A tiny library of single type pure functional operators and utility functions, making data easy',
          href: 'https://kyanite.dusty.codes',
          github: 'https://github.com/dhershman1/kyanite',
          npm: 'https://www.npmjs.com/package/kyanite',
          npmBadge: 'https://img.shields.io/npm/v/kyanite.svg?style=flat-square'
        }, {
          title: 'Phone-Fns',
          description: 'A tiny library of utility functions based that make working with phone numbers easier',
          href: 'https://phone-fns.dusty.codes',
          npm: 'https://www.npmjs.com/package/phone-fns',
          github: 'https://github.com/dhershman1/phone-fns',
          npmBadge: 'https://img.shields.io/npm/v/phone-fns.svg?style=flat-square'
        }, {
          title: 'Simply_Valid',
          description: 'A data driven validation library with built in functionality for easy checks to make sure data is valid before going anywhere',
          href: 'http://simply_valid.dusty.codes',
          npm: 'https://www.npmjs.com/package/simply_valid',
          github: 'https://github.com/dhershman1/simply_valid',
          npmBadge: 'https://img.shields.io/npm/v/simply_valid.svg?style=flat-square'
        }
      ]
    }
  }
}
</script>

<style>
.mb {
  margin-bottom: 0.7rem;
}
</style>
