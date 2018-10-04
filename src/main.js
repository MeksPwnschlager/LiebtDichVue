import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueJanosh from 'vue-janosh'
import VueLocalStorage from 'vue-localstorage'
import Vuetify from 'vuetify'

Vue.config.productionTip = false

// Global Components

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
