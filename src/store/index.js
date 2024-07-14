import Vue from 'vue'
import Vuex from 'vuex'
import stu from './modeules/stu'
import Disciplinary from './modeules/Disciplinary'
import getters from './getters'
import home from './modeules/home'
import setting from './modeules/setting'
import user from './modeules/user'
import tags from './modeules/tags'
import draggableSetting from './modeules/draggableSetting'
import globalTheme from './modeules/globalTheme'
import WorkAssistance from '@/store/modeules/WorkAssistance'
import dailyMatter from '@/store/modeules/dailyMatter'
import Dormitory from '@/store/modeules/Dormitory'
import Awards from '@/store/modeules/Awards'
import monitor from '@/store/modeules/monitor'
import complaint from '@/store/modeules/complaint'
import adminScholarship from '@/store/modeules/adminScholarship'
import adminDormitory from '@/store/modeules/admindormitory'
import adminLeave from '@/store/modeules/adminLeave'
import adminPunish from '@/store/modeules/adminPunish'
import adminWorkStudy from '@/store/modeules/adminWorkStudy'
import adminMonitor from '@/store/modeules/adminMonitor'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Disciplinary,
    home,
    setting,
    user,
    tags,
    draggableSetting,
    globalTheme,
    stu,
    WorkAssistance,
    dailyMatter,
    Dormitory,
    Awards,
    monitor,
    adminScholarship,
    complaint,
    adminDormitory,
    adminLeave,
    adminPunish,
    adminWorkStudy,
    adminMonitor
  },
  getters
})

export default store
