// 这里是请假和留校申请
import { getAdminQueryLeave } from '@/api'

const state = {
  adminQueryLeaveInfo:[]
}
const mutations = {
  ADMINQUERYLEAVE(state,adminQueryLeaveInfo) {
    state.adminQueryLeaveInfo = adminQueryLeaveInfo
  }
}
const actions = {
  // 这里是请假申请的信息
  async AdminQueryLeave({commit}) {
    const res = await getAdminQueryLeave()
    console.log(res)
    if(res.role === 1){
      commit('ADMINQUERYLEAVE',res.data)
    }
  },
}
export default {
  state,
  mutations,
  actions,
}
