<template>
  <div>
    <a v-for="(b, i) in badgeList[module]" :key="i" :href="b.to">
      <img class="mr-1" :src="b.badge" alt="badge image" />
    </a>
  </div>
</template>

<script>
/* eslint-disable max-len */
export default {
  props: {
    module: {
      type: String,
      default: 'dusty-fns'
    }
  },
  data() {
    return {
      badgeList: {
        'dusty-fns': [
          {
            to: 'https://travis-ci.org/dhershman1/dustyjs',
            badge: 'https://img.shields.io/travis/dhershman1/dustyjs.svg?style=flat-square'
          }, {
            to: 'https://www.npmjs.com/package/dusty-fns',
            badge: 'https://img.shields.io/npm/v/dusty-fns.svg?style=flat-square'
          }, {
            to: 'https://github.com/dhershman1/dustyjs',
            badge: 'https://img.shields.io/github/size/dhershman1/dustyjs/dusty.min.js.svg?style=flat-square'
          }, {
            to: 'https://github.com/dhershman1/dustyjs/issues',
            badge: 'https://img.shields.io/github/issues/dhershman1/dustyjs.svg?style=flat-square'
          }, {
            to: 'https://github.com/dhershman1/dustyjs/blob/master/LICENSE',
            badge: 'https://img.shields.io/github/license/dhershman1/dustyjs.svg?style=flat-square'
          }
        ],
        'phone-fns': [
          {
            to: 'https://travis-ci.org/dhershman1/phone-fns',
            badge: 'https://img.shields.io/travis/dhershman1/phone-fns.svg?style=flat-square'
          }, {
            to: 'https://www.npmjs.com/package/phone-fns',
            badge: 'https://img.shields.io/npm/v/phone-fns.svg?style=flat-square'
          }, {
            to: 'https://github.com/dhershman1/phone-fns',
            badge: 'https://img.shields.io/github/size/dhershman1/phone-fns/phone-fns.min.js.svg?style=flat-square'
          }, {
            to: 'https://github.com/dhershman1/phone-fns/issues',
            badge: 'https://img.shields.io/github/issues/dhershman1/phone-fns.svg?style=flat-square'
          }, {
            to: 'https://github.com/dhershman1/phone-fns/blob/master/LICENSE',
            badge: 'https://img.shields.io/github/license/dhershman1/phone-fns.svg?style=flat-square'
          }
        ],
        'simply_valid': [
          {
            to: 'https://travis-ci.org/dhershman1/simply_valid',
            badge: 'https://img.shields.io/travis/dhershman1/simply_valid.svg?style=flat-square'
          }, {
            to: 'https://www.npmjs.com/package/simply_valid',
            badge: 'https://img.shields.io/npm/v/simply_valid.svg?style=flat-square'
          }, {
            to: 'https://github.com/dhershman1/simply_valid',
            badge: 'https://img.shields.io/github/size/dhershman1/simply_valid/simply-valid.min.js.svg?style=flat-square'
          }, {
            to: 'https://github.com/dhershman1/simply_valid/issues',
            badge: 'https://img.shields.io/github/issues/dhershman1/simply_valid.svg?style=flat-square'
          }, {
            to: 'https://github.com/dhershman1/simply_valid/blob/master/LICENSE',
            badge: 'https://img.shields.io/github/license/dhershman1/simply_valid.svg?style=flat-square'
          }
        ],
        'simple-card': [
          {
            to: 'https://travis-ci.org/dhershman1/simple-card',
            badge: 'https://img.shields.io/travis/dhershman1/simple-card.svg?style=flat-square'
          }, {
            to: 'https://www.npmjs.com/package/simple-card',
            badge: 'https://img.shields.io/npm/v/simple-card.svg?style=flat-square'
          }, {
            to: 'https://github.com/dhershman1/simple-card',
            badge: 'https://img.shields.io/github/size/dhershman1/simple-card/simple-card.min.js.svg?style=flat-square'
          }, {
            to: 'https://github.com/dhershman1/simple-card/issues',
            badge: 'https://img.shields.io/github/issues/dhershman1/simple-card.svg?style=flat-square'
          }, {
            to: 'https://github.com/dhershman1/simple-card/blob/master/LICENSE',
            badge: 'https://img.shields.io/github/license/dhershman1/simple-card.svg?style=flat-square'
          }
        ]
      }
    };
  }
};
</script>

