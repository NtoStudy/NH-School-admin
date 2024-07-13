import { getAdminQueryViolation } from '@/api'

const state = {
  adminQueryViolationInfo:[]
}
const mutations = {
  ADMINQUERYVIOLATION(state,adminQueryViolationInfo) {
    state.adminQueryViolationInfo = adminQueryViolationInfo
  }
}
const actions = {
  async AdminQueryViolation({commit}) {
    const res = await getAdminQueryViolation()
    if(res.role === 1){
      commit('ADMINQUERYVIOLATION',res.data)
    }
  },
}
export default {
  state,
  mutations,
  actions,
}
