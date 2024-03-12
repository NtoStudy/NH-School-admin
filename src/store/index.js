import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import home from './modeules/home'
import setting from './modeules/setting'
import user from './modeules/user'
import tags from './modeules/tags'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
    setting,
    user,
    tags
  },
  getters
})

export default store
