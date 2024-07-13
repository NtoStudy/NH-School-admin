// 宿舍有关的接口
import {getAdminQueryRepair} from '@/api'
const state = {
  adminQueryRepairInfo:[]
}
const mutations = {
  ADMINQUERYPEPAIR(state,adminQueryRepairInfo) {
    state.adminQueryRepairInfo = adminQueryRepairInfo
  }

}
const actions = {
  // 查询宿舍维修信息
  async AdminQueryRepair({commit}) {
    const res = await getAdminQueryRepair()
    if(res.role === 1){
      commit('ADMINQUERYPEPAIR',res.data)
    }

  },
}
export default {
  state,
  mutations,
  actions,
}
