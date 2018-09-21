// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueJanosh from 'vue-janosh'
import VueLocalStorage from 'vue-localstorage'
import Vuetify from 'vuetify'

import Vector from '@/components/global/Vector'

Vue.config.productionTip = false

// Global Components
Vue.component('vector', Vector)

// Plugins
Vue.use(VueJanosh, {
  socketUri: 'wss://liebt-dich.org:10000'
})

Vue.use(VueLocalStorage)

Vue.use(Vuetify)

Vue.use(require('vue-moment'))

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
