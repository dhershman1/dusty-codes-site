<template>
  <div>
    <a v-for="(b, i) in badgeList[module]" :key="i" :href="b.to">
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
  data() {
    return {
      badgeList: {
        'kyanite': [
          {
            to: 'https://travis-ci.org/silicate-tools/kyanite',
            badge: 'https://img.shields.io/travis/silicate-tools/kyanite.svg?style=flat-square',
            alt: 'build badge'
          }, {
            to: 'https://www.npmjs.com/package/kyanite',
            badge: 'https://img.shields.io/npm/v/kyanite.svg?style=flat-square',
            alt: 'npm version badge'
          }, {
            to: 'https://github.com/silicate-tools/kyanite',
            badge: 'https://img.shields.io/github/size/silicate-tools/kyanite/dist/kyanite.min.js.svg?style=flat-square',
            alt: 'size badge'
          }, {
            to: 'https://github.com/silicate-tools/kyanite/issues',
            badge: 'https://img.shields.io/github/issues/silicate-tools/kyanite.svg?style=flat-square',
            alt: 'github issues badge'
          }, {
            to: 'https://github.com/silicate-tools/kyanite/blob/master/LICENSE',
            badge: 'https://img.shields.io/github/license/silicate-tools/kyanite.svg?style=flat-square',
            alt: 'license badge'
          }
        ],
        'phone-fns': [
          {
            to: 'https://travis-ci.org/dhershman1/phone-fns',
            badge: 'https://img.shields.io/travis/dhershman1/phone-fns.svg?style=flat-square',
            alt: 'build badge'
          }, {
            to: 'https://www.npmjs.com/package/phone-fns',
            badge: 'https://img.shields.io/npm/v/phone-fns.svg?style=flat-square',
            alt: 'npm version badge'
          }, {
            to: 'https://github.com/dhershman1/phone-fns',
            badge: 'https://img.shields.io/github/size/dhershman1/phone-fns/dist/phone-fns.min.js.svg?style=flat-square',
            alt: 'size badge'
          }, {
            to: 'https://github.com/dhershman1/phone-fns/issues',
            badge: 'https://img.shields.io/github/issues/dhershman1/phone-fns.svg?style=flat-square',
            alt: 'github issues badge'
          }, {
            to: 'https://github.com/dhershman1/phone-fns/blob/master/LICENSE',
            badge: 'https://img.shields.io/github/license/dhershman1/phone-fns.svg?style=flat-square',
            alt: 'license badge'
          }
        ],
        'simply_valid': [
          {
            to: 'https://travis-ci.org/dhershman1/simply_valid',
            badge: 'https://img.shields.io/travis/dhershman1/simply_valid.svg?style=flat-square',
            alt: 'build badge'
          }, {
            to: 'https://www.npmjs.com/package/simply_valid',
            badge: 'https://img.shields.io/npm/v/simply_valid.svg?style=flat-square',
            alt: 'npm version badge'
          }, {
            to: 'https://github.com/dhershman1/simply_valid',
            badge: 'https://img.shields.io/github/size/dhershman1/simply_valid/dist/simply-valid.min.js.svg?style=flat-square',
            alt: 'size badge'
          }, {
            to: 'https://github.com/dhershman1/simply_valid/issues',
            badge: 'https://img.shields.io/github/issues/dhershman1/simply_valid.svg?style=flat-square',
            alt: 'github issues badge'
          }, {
            to: 'https://github.com/dhershman1/simply_valid/blob/master/LICENSE',
            badge: 'https://img.shields.io/github/license/dhershman1/simply_valid.svg?style=flat-square',
            alt: 'license badge'
          }
        ],
        'simple-card': [
          {
            to: 'https://travis-ci.org/dhershman1/simple-card',
            badge: 'https://img.shields.io/travis/dhershman1/simple-card.svg?style=flat-square',
            alt: 'build badge'
          }, {
            to: 'https://www.npmjs.com/package/simple-card',
            badge: 'https://img.shields.io/npm/v/simple-card.svg?style=flat-square',
            alt: 'npm version badge'
          }, {
            to: 'https://github.com/dhershman1/simple-card',
            badge: 'https://img.shields.io/github/size/dhershman1/simple-card/dist/simple-card.min.js.svg?style=flat-square',
            alt: 'size badge'
          }, {
            to: 'https://github.com/dhershman1/simple-card/issues',
            badge: 'https://img.shields.io/github/issues/dhershman1/simple-card.svg?style=flat-square',
            alt: 'github issues badge'
          }, {
            to: 'https://github.com/dhershman1/simple-card/blob/master/LICENSE',
            badge: 'https://img.shields.io/github/license/dhershman1/simple-card.svg?style=flat-square',
            alt: 'license badge'
          }
        ]
      }
    };
  }
};
</script>

