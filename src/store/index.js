import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import home from './modeules/home'
import setting from './modeules/setting'
import user from './modeules/user'
import tags from './modeules/tags'
import draggableSetting from './modeules/draggableSetting'
import globalTheme from '@/store/modeules/globalTheme'
import stu from '@/store/modeules/stu'
import Disciplinary from '@/store/modeules/Disciplinary'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
    setting,
    user,
    tags,
    draggableSetting,
    globalTheme,
    stu,
    Disciplinary
  },
  getters
})

export default store
