import Vue from 'vue'
import Vuex from 'vuex'
import notification from './modules/notification.js'
import janosh from './modules/janosh.js'

Vue.use(Vuex)

const DEBUG = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  modules: {
    notification,
    janosh
  },
  strict: DEBUG
})
