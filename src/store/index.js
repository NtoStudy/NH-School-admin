import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import home from './modeules/home'
import setting from './modeules/setting'
import user from './modeules/user'
import tags from './modeules/tags'
import draggableSetting from './modeules/draggableSetting'
import globalTheme from '@/store/modeules/globalTheme'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
    setting,
    user,
    tags,
    draggableSetting,
    globalTheme
  },
  getters
})

export default store
