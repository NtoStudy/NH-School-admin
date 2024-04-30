//searchs 的小仓库

// state: 仓库存储数据的地方
import { getScholarshipDetails, getScholarshipProgress } from '@/api'

const state = {
  ScholarshipProgressList:[],
  ScholarshipDetailsList:[]
}

// mutations：修改state的唯一手段
const mutations ={
  GETSCOLARSHIPPROGRESS(state,ScholarshipProgressList){
    state.ScholarshipProgressList = ScholarshipProgressList
  },

  GETSCOLARSHIPDETAILS(state,ScholarshipDetailsList){
    state.ScholarshipDetailsList = ScholarshipDetailsList
  },


}

//action 处理action可以书写自己的业务逻辑 也可以处理异步
const actions = {
  // 查询奖学金基础信息
  async AndAwardsNotApplying({commit}){
    const res = await getScholarshipDetails()
    // console.log(res)
    // console.log(res.data)
    commit('GETSCOLARSHIPDETAILS',res.data)
  },


  // 查询奖学金进度
  async AndAwardsRequested({commit}){
    const res = await getScholarshipProgress()
    // console.log(res)
    // console.log(res.data)
    commit('GETSCOLARSHIPPROGRESS',res.data)
  },
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
