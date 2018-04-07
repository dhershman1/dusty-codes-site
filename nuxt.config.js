const nodeExternals = require('webpack-node-externals');
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Dusty Codes',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'My Portfolio and documentation site for all my projects'
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
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  plugins: ['~/plugins/vuetify.js', '~/plugins/directive.js'],
  css: ['~/assets/style/app.styl'],

  router: {
    middleware: ['redirect']
  },

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
          'transform-imports',
          {
            'vuetify': {
              transform: 'vuetify/es5/components/${member}', // eslint-disable-line
              preventFullImport: true
            },
            'vuetify-directives': {
              transform: 'vuetify/es5/directives/${member}', // eslint-disable-line
              preventFullImport: true
            }
          }
        ]
      ]
    },
    vendor: ['~/plugins/vuetify.js'],
    extractCSS: true,

    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      // eslint-disable-line complexity
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            configFile: resolve('.eslintrc.js')
          }
        });
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [
              /^vuetify/,
              'phone-fns',
              'dusty-fns',
              'simply_valid',
              'simple-card'
            ]
          })
        ];
      }
    }
  }
};
