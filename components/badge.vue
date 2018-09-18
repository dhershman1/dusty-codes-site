<template>
  <div>
    <a v-for="(b, i) in list" :key="i" :href="b.to">
      <img class="mr-1" :src="b.badge" :alt="b.alt" />
    </a>
  </div>
</template>

<script>
/* eslint-disable max-len */
export default {
  props: {
    module: {
      type: String,
      default: 'kyanite'
    }
  },
  data () {
    return {
      list: [
        {
          to: `https://travis-ci.org/dhershman1/${this.module}`,
          badge: `https://img.shields.io/travis/dhershman1/${this.module}.svg?style=flat-square`,
          alt: `build badge for ${this.module}`
        }, {
          to: `https://github.com/dhershman1/${this.module}`,
          badge: `https://img.shields.io/github/size/dhershman1/${this.module}/dist/${this.convertModule(this.module)}.min.js.svg?style=flat-square`,
          alt: `size badge for ${this.module}`
        }, {
          to: `https://github.com/dhershman1/${this.module}/issues`,
          badge: `https://img.shields.io/github/issues/dhershman1/${this.module}.svg?style=flat-square`,
          alt: `github issues badge for ${this.module}`
        }, {
          to: `https://github.com/dhershman1/${this.module}/blob/master/LICENSE`,
          badge: `https://img.shields.io/github/license/dhershman1/${this.module}.svg?style=flat-square`,
          alt: `license badge for ${this.module}`
        }
      ]
    }
  },
  methods: {
    convertModule (val) {
      // Since my idiot self named the distro version of simply valid to simply-valid.min.js
      // We need to convert it for this one and only module...
      // Why am I like this
      if (val === 'simply_valid') {
        return 'simply-valid'
      }

      return val
    }
  }
}
</script>

