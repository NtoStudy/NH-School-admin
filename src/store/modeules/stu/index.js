
// state: 仓库存储数据的地方
import { getComplaintProgress } from '@/api'

const state = {
  complainList:[]
}

// mutations：修改state的唯一手段
const mutations ={
  GETCOMPLAINTPROGRESS(data,complainList){
    data.complainList = complainList
  }
}

//action 处理action可以书写自己的业务逻辑 也可以处理异步
const actions = {
  async complain ({commit},complaintTarget,complaintReason) {
    const res = await getComplaintProgressgetComplaintProgress(complaintTarget,complaintReason)
    // console.log(res)
    commit('GETCOMPLAINTPROGRESS',res.data)

  },
}

//getters：可以理解为计算属性
const getters = {}

// 对外暴露Store实例
export default({
  namespaced: true,
  state,
  mutations,
  actions,
  getters
})
