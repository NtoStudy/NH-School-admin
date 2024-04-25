import {GetDisciplinary} from '@/api'
//home 的小仓库

// state: 仓库存储数据的地方
const state = {
  Disciplinary: []
}

// mutations：修改state的唯一手段
const mutations ={
  GETDISCIPLINARY(state,Disciplinary){
    state.Disciplinary = Disciplinary
  }

}

//action 处理action可以书写自己的业务逻辑 也可以处理异步
const actions = {
  async DisciplinarySanctions ({commit}){
    const res = await GetDisciplinary()
    console.log(res)
    commit("GETDISCIPLINARY",res.data)
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
