import Vue from 'vue'
import router from '@/router/index'
import * as actionTypes from '../actionTypes'
// import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'
import { log } from '@/utils.js'

const state = {
  ready: false,
  quote: false,
  conversations: false,
  selectedConversation: false,
  account: false
}

const getters = {
  /*  [getterNames.helloWorld]: (state, getters) => (
    state.hello
  ) */
}

const actions = {
  async [actionTypes.JANOSH_SETUP] ({ dispatch, commit, getters }) {
    log.info('JANOSH', 'Setting up...')

    Vue.janosh.subscribe('notify', (value) => {
      commit(mutationTypes.NOTIFY, value)
    })

    Vue.janosh.subscribe('quote', (value) => {
      commit(mutationTypes.JANOSH_UPDATE_STATE, { key: 'quote', value })
    })

    Vue.janosh.subscribe('conversation', (value) => {
      commit(mutationTypes.JANOSH_UPDATE_STATE, { key: 'selectedConversation', value })
    })

    Vue.janosh.subscribe('conversations', (value) => {
      commit(mutationTypes.JANOSH_UPDATE_STATE, { key: 'conversations', value })
    })

    Vue.janosh.subscribe('account', (value) => {
      commit(mutationTypes.JANOSH_UPDATE_STATE, { key: 'account', value })
    })

    Vue.janosh.onReceive((value) => {
      if (value === 'auth') {
        dispatch(actionTypes.JANOSH_LOGIN, {redirect: '/'})
      } else if (value.startsWith('register-success:') || value.startsWith('login-success:')) {
        commit(mutationTypes.NOTIFY, 'Successful')
        Vue.localStorage.set('session', value.split(':')[1])
        log.success('JANOSH', 'Updated session key.')
        router.push('/account')
      } else if (value === 'session-invalid') {
        log.error('JANOSH', 'Session invalid.')
        commit(mutationTypes.NOTIFY, 'Session has expired')
        Vue.localStorage.remove('session')
        router.push('/login')
      } else if (value.startsWith('session-success:')) {
        log.success('JANOSH', 'Session authorized.')
      } else if (!value.startsWith('[')) {
        commit(mutationTypes.NOTIFY, value)
        router.push('/login')
      }
    })

    Vue.janosh.onError((error) => {
      log.error('JANOSH', error)
      commit(mutationTypes.JANOSH_READY, false)
    })

    Vue.janosh.onReady(() => {
      commit(mutationTypes.JANOSH_READY, true)
    })

    log.success('JANOSH', 'Setup Complete.')
  },
  [actionTypes.JANOSH_LOGIN] ({ commit, getters, state }, { redirect }) {
    const key = Vue.localStorage.get('session', false)
    if (key) {
      log.info('JANOSH', 'Authorizing session...')
      Vue.janosh.login(key)
      return
    } else if (redirect) {
      router.push(redirect)
      log.info('JANOSH', `No auth key, redirecting to: ${redirect}.`)
      return
    }
    log.info('JANOSH', 'No auth key, no redirect!')
  }
}

const mutations = {
  [mutationTypes.JANOSH_READY] (state, ready) {
    state.ready = ready
  },
  [mutationTypes.JANOSH_UPDATE_STATE] (state, data) {
    state[data.key] = JSON.parse(data.value)
  },
  [mutationTypes.JANOSH_CLEAR_STATE] (state, key) {
    state[key] = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
