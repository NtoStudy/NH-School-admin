//searchs 的小仓库

// state: 仓库存储数据的地方
import { getCommitteeInformation } from '@/api'

const state = {
  monitorList:[]
}

// mutations：修改state的唯一手段
const mutations ={
  GETCOMMITEEINFORMATION(state,monitorList){
    state.monitorList = monitorList
  }
}

//action 处理action可以书写自己的业务逻辑 也可以处理异步
const actions = {
  async NanIdeologicalAndPoliticalTeam({commit}){
    const res = await getCommitteeInformation()
    // console.log(res)
    commit('GETCOMMITEEINFORMATION',res.data)
  }
}

//getters：可以理解为计算属性
const getters = {
}

// 对外暴露Store实例
export default({
  state,
  mutations,
  actions,
  getters
})
