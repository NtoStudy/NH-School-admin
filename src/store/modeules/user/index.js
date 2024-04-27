import { getUserLogin } from '@/api'
import { setLocalStorage, getLocalStorage } from '@/utils/catch'


const state = {
  userInfo: {
    name: '一小池勺',
    StudentCount: '202217423'
  },
  token: getLocalStorage('token') ? getLocalStorage('token') : ''
}
const mutations = {}
const actions = {
  async UserLogin({commit},data){
    const res = await getUserLogin()
    if(res.data) {
      setLocalStorage('token', res.data)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
