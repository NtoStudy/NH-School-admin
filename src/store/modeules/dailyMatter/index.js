//searchs 的小仓库

// state: 仓库存储数据的地方
import { getLeaveInformation, getProgressCampus } from '@/api'

const state = {
  StayCampusList:[],
  LeaveCampusList:[]
}

// mutations：修改state的唯一手段
const mutations ={

  // 查询留校申请数据
  GETPROGRESSCAMPUS(state,StayCampusList){
    state.StayCampusList = StayCampusList
  },

  // 查询请假申请数据
  GETLEAVEINFORMATION(state,LeaveCampusList){
    state.LeaveCampusList = LeaveCampusList
  }
}


//action 处理action可以书写自己的业务逻辑 也可以处理异步
const actions = {

  // 查询留校申请数据
  async StayCampus ({commit}){
    const res = await getProgressCampus()
    // console.log(res)
    // console.log(res.data)
    commit('GETPROGRESSCAMPUS',res.data)
  },


  // 查询请假申请数据
  async LeaveManagement({commit}){
    const res = await getLeaveInformation()
    // console.log(res)
    // console.log(res.data)
    commit('GETLEAVEINFORMATION',res.data)
  }

}

//getters：可以理解为计算属性
const getters = {}

// 对外暴露Store实例
export default({
  namespace:true,
  state,
  mutations,
  actions,
  getters
})
