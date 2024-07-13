//有关管理员奖学金的接口
import {getAdminScholarshipInfo} from '@/api'
const state = {
  adminScholarshipInfo:[]
}
const mutations = {
  ADMINSCHILARSHIPINFO(state,adminScholarshipInfo) {
    state.adminScholarshipInfo = adminScholarshipInfo
  }

}
const actions = {
  // 获取奖学金信息
  async AdminScholarshipInfo({commit}) {
    const res = await getAdminScholarshipInfo()
    // 因为后台返回没有code值 用role值来代替
    if(res.role === 1) {
      commit('ADMINSCHILARSHIPINFO',res.data)
    }
  },

}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
