const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Dusty Codes',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Portfolio for Dustin Hershman'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/imgs/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: '/atom-one-dark.css'
      }
    ]
  },
  plugins: ['~/plugins/ant.js'],
  css: [{
    src: 'ant-design-vue/dist/antd.less',
    lang: 'less'
  }, '~/static/main.css'],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: [
        [
          'transform-imports'
        ]
      ]
    },
    extractCSS: true,

    extend (config, ctx) {
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [
              'ant-design-vue',
              'kyanite'
            ]
          })
        ]
      }
    },
    loaders: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'link-color': '#dc7c7c'
          // 'component-background': 'transparent',
          // 'menu-item-color': '#FFF'
        }
      }
    }
  }
}
