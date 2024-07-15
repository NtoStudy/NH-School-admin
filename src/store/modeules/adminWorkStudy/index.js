import { getAdminQueryWork } from '@/api'

const state = {
  adminQueryWorkInfo:[]
}
const mutations = {
  ADMINQUERYWORK(state,adminQueryWorkInfo){
    state.adminQueryWorkInfo = adminQueryWorkInfo
  }
}
const actions = {
  async AdminQueryWork({commit}){
    const res = await getAdminQueryWork(1,7)
    // console.log(res)
    if(res.role === 1){
      commit('ADMINQUERYWORK',res.data.records)
    }

  }
}

export default {
  state,
  mutations,
  actions
}
