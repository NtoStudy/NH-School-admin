import { getAdminLogin, getUserLogin } from '@/api'
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
  // 学生的登录接口请求
  async UserLogin({commit},data){
    const res = await getUserLogin()
    // console.log(res.role)
    if(res.data) {
      setLocalStorage('token', res.data)
    }
  },
  // 管理端的登录接口请求
  async AdminLogin({commit},data){
    const res = await getAdminLogin()
    // console.log(res.role)
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
