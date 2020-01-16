const StylintWebpackPlugin = require('@startingpoint/stylint-webpack-plugin');

<%_ if (ui === 'vuetify') { _%>
import colors from 'vuetify/es5/util/colors'
<%_ } _%>

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    <%_ if (ui === 'vuetify') { _%>
    titleTemplate: '%s - ' + process.env.npm_package_name,
    <%_ } _%>
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      <%_ if (ui === 'framevuerk') { _%>
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      <%_ } _%>
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    <%_ if (ui === 'element-ui') { _%>
    'element-ui/lib/theme-chalk/index.css',
    <%_ } else if (ui === 'iview') { _%>
    'iview/dist/styles/iview.css',
    <%_ } else if (ui === 'ant-design-vue') { _%>
    'ant-design-vue/dist/antd.css',
    <%_ } else if (ui === 'tachyons') { _%>
    'tachyons/css/tachyons.css',
    <%_ } else if (ui === 'framevuerk') { _%>
    'framevuerk/dist/framevuerk-nuxt.min.css',
    <%_ } _%>
    '~/assets/styles/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    <%_ if (ui === 'element-ui') { _%>
    '@/plugins/element-ui'
    <%_ } else if (ui === 'iview') { _%>
    '@/plugins/iview'
    <%_ } else if (ui === 'ant-design-vue') { _%>
    '@/plugins/antd-ui'
    <%_ } else if (ui === 'framevuerk') { _%>
    '@/plugins/framevuerk'
    <%_ } _%>
    '@/plugins/api-resources'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    'nuxt-puglint-module',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    <%_ if (ui === 'tailwind') { _%>
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    <%_ } else if (ui === 'vuetify') { _%>
    '@nuxtjs/vuetify',
    <%_ } _%>
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    <%_ if (ui === 'bootstrap') { _%>
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    <%_ } else if (ui === 'buefy') { _%>
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    <%_ } _%>
    'nuxt-fontawesome',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  <%_ if (ui === 'buefy') { _%>
  /*
   ** Buefy options
   */
  buefy: {
    css: false,
    materialDesignIcons: false,
    defaultIconPack: 'fas',
    defaultIconComponent: 'font-awesome-icon'
  },
  <%_ } _%>
  /*
   ** Fontawesome options
   */
  fontawesome: {
    component: 'font-awesome-icon',
    imports: [
      { set: '@fortawesome/free-solid-svg-icons', icons: ['fas'] },
      { set: '@fortawesome/free-brands-svg-icons', icons: ['fab'] },
      { set: '@fortawesome/free-regular-svg-icons', icons: ['far'] }
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  <%_ if (ui === 'vuetify') { _%>
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  <%_ } _%>
  /*
  ** Build configuration
  */
  build: {
    <%_ if (ui === 'element-ui') { _%>
    transpile: [/^element-ui/],
    <%_ } _%>
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.plugins.push(new StylintWebpackPlugin({
          files: ['./pages', './assets'],
        }));
      }
    }
  }
}
