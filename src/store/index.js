import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import modules from './modules'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  getters
})
