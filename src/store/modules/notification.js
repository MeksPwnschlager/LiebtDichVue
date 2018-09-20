// import * as actionTypes from '../actionTypes'
// import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'
import { log } from '@/utils.js'

const state = {
  message: ''
}

const getters = {
}

const actions = {
}

const mutations = {
  [mutationTypes.NOTIFY] (state, message) {
    state.message = message
    log.info('NOTIFY', message)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
