import meta from 'dev-assets/config/nuxt/meta';
import splashscreens from 'dev-assets/config/nuxt/splashscreens';
import buildModules from 'dev-assets/config/nuxt/buildModules';
import modules from 'dev-assets/config/nuxt/modules';
import build from 'dev-assets/config/nuxt/build';
import banner from 'dev-assets/config/nuxt/banner';
import dir from 'cv-assets/config/nuxt/dir';
import loadingIndicator from 'cv-assets/config/nuxt/loadingIndicator';
import plugins from 'cv-assets/config/nuxt/plugins';
import i18nConfig from 'cv-assets/config/nuxt/modules/i18n';
import css from 'cv-assets/config/nuxt/css';
import styleResources from 'cv-assets/config/nuxt/styleResources';
import { author, description, homepage, title, version } from './package.json';

export default {
  mode: 'spa',

  server: {
    port: 9001
  },

  dir,

  /*
   ** Headers of the page
   */
  head: {
    title,
    meta: [...meta({ title, description, homepage })],
    link: [...splashscreens],
    bodyAttrs: {
      ontouchstart: ''
    }
  },

  /*
   ** Customize the progress-bar
   */
  loading: false,
  loadingIndicator,

  /*
   ** Style resources
   */
  styleResources,

  /*
   ** Global CSS
   */
  css: [...css, '@node_modules/cv-assets/assets/styles/global/tooltip.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins,

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [...buildModules()],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ['nuxt-svg-loader'],
    ['@nuxtjs/dotenv'],
    ['nuxt-i18n', i18nConfig],
    ...modules({
      title,
      author,
      description
    })
  ],

  /*
   ** Build configuration
   */
  build: build({ banner: banner({ title, homepage, author, version }) })
};
