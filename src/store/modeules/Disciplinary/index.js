import {getPunishmentList} from '@/api'
//home 的小仓库

// state: 仓库存储数据的地方
const state = {
  // PunishmentList: []
}

// mutations：修改state的唯一手段
const mutations ={
  // GETPUNISHMENTLIST(state,PunishmentList){
  //   state.PunishmentList = PunishmentList
  // }
}

//action 处理action可以书写自己的业务逻辑 也可以处理异步
const actions = {
  async DisciplinaryAppeal ({commit}){
    const res = await getPunishmentList()
    console.log(res)
    // commit("GETPUNISHMENTLIST",res.data)
  }
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
