import { getUserLogin } from '@/api'



const state = {
  userInfo: {
    name: '一小池勺',
    StudentCount: '202217423'
  }
}
const mutations = {}
const actions = {
  async UserLogin({commit},data){
    const res = await getUserLogin(data)
    console.log(res)
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
