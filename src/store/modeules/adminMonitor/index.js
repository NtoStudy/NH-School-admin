import { getAdminQueryMonitor } from '@/api'

const state ={
  AdminQueryMonitorInfo:[]
}
const mutations ={
  ADMINQUERYMONITOR(state,AdminQueryMonitorInfo){
    state.AdminQueryMonitorInfo = AdminQueryMonitorInfo
  }

}
const actions = {
  async AdminQueryMonitor({commit}){
    const res = await getAdminQueryMonitor()
    if(res.role === 1){
      commit('ADMINQUERYMONITOR',res.data)
    }
  }
}
export default {
  state,
  mutations,
  actions
}
