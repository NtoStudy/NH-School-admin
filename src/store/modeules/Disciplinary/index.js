import { getProgressQuery, getPunishmentList,getRelievePunishment } from '@/api'
//home 的小仓库

// state: 仓库存储数据的地方
const state = {
  // 处分查询数据
  PunishmentList: [],
  RelievePunishmentList: [],
  // PostRelievePunishmentList: []
}

// mutations：修改state的唯一手段
const mutations ={
  //  处分查询接口
  GETPUNISHMENTLIST(state,PunishmentList){
    state.PunishmentList = PunishmentList
  },

  // 处分解除查询接口
  GETPROGRESSQUERY(state,RelievePunishmentList){
    state.RelievePunishmentList = RelievePunishmentList
  },

  // // 添加解除处分接口
  // GETRELIEVEPUNISHMENT(state,PostRelievePunishmentList){
  //   state.PostRelievePunishmentList = PostRelievePunishmentList
  // }
}

//action 处理action可以书写自己的业务逻辑 也可以处理异步
const actions = {
  //  处分查询接口
  async DisciplinaryAppeal ({commit}){
    const res = await getPunishmentList()
    // console.log(res)
    // console.log(res.data)
    commit("GETPUNISHMENTLIST",res.data)
  },

  // 处分解除查询接口
  async TerminationDisciplinaryAction({commit}){
    const res = await getProgressQuery()
    // console.log(res.data)
    commit('GETPROGRESSQUERY',res.data)
  },

  // // 添加解除处分接口
  // async PostTerminationDisciplinaryAction({commit}, violationId){
  //   const res = await getRelievePunishment(violationId)
  //   console.log(res.data)
  //   commit('GETRELIEVEPUNISHMENT',res.data)
  // }
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
