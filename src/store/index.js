import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import indexPage from './modeules/indexPage'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    indexPage
  },
  getters
})

export default store
