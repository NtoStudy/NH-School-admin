//searchs 的小仓库

// state: 仓库存储数据的地方
import { getMaintenanceProgress } from '@/api'

const state = {
  DormitoryStatusList:[]
}

// mutations：修改state的唯一手段
const mutations ={
  GETMAINTENANCEPROGRESS(state,DormitoryStatusList){
    state.DormitoryStatusList = DormitoryStatusList
  }
}

//action 处理action可以书写自己的业务逻辑 也可以处理异步
const actions = {
  async ChangeApplication({commit}){
    const res =await getMaintenanceProgress()
    // console.log(res)
    // console.log(res.data)
    commit('GETMAINTENANCEPROGRESS',res.data)
  }
}

//getters：可以理解为计算属性
const getters = {}

// 对外暴露Store实例
export default({
  state,
  mutations,
  actions,
  getters
})
