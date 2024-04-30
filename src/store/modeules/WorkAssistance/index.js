import { getCompletedWork,getWorkInformation } from '@/api'

const state = {
  // 用于存放所有的快捷访问方式
  // 工作信息
  workList:[],
  EndWorkList: [],
  page:'',
  pageSize:'',
  key:''
}
const mutations = {
  // 查询工作信息
  GETWORKINFORMATION (state,workList){
    state.workList = workList
  },

  // 查询已经完成的工作
  GETCOMPLETEDWORK (state,EndWorkList){
    state.EndWorkList = EndWorkList
  }
}


const actions = {

  // 查询工作信息
 async AllPositions({commit}, data){
   // console.log(data)
   const res = await getWorkInformation(data)
   // console.log(res)
   // console.log(res.data)
   commit('GETWORKINFORMATION',res.data)
 },

 // 查询已经完成的工作信息

  async PositionPersonnel({commit}){
   const res = await  getCompletedWork()
    // console.log(res)
    // console.log(res.data)
    commit('GETCOMPLETEDWORK',res.data)
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
