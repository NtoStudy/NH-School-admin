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
    for(let i = 0;i<4;i++){
      let DataTest = res.data[i].restriction
      if(DataTest === '["1、在校期间“2018-2019、2019-2020、2020-2021、2021-2022、2022-2023、2023-2024无违纪情况”","2、2023-2024学年专业文化素质测评分，大于等于90分才能申请","3、2023-2024学年身体心理素质，大于等于80分才能申请","4、2023-2024学年思想道德素质，大于等于90分才能申请","5、2023-2024学年综测总分，参评组排名前1才能申请","6、在校期间“2023-2024各科成绩”大于等于85分"]'){
        res.data[i].restriction = `"1、在校期间“2018-2019、2019-2020、2020-2021、2021-2022、2022-2023、2023-2024无违纪情况",
"2、2023-2024学年专业文化素质测评分，大于等于90分才能申请",
"3、2023-2024学年身体心理素质，大于等于80分才能申请",
"4、2023-2024学年思想道德素质，大于等于90分才能申请",
"5、2023-2024学年综测总分，参评组排名前1才能申请",
"6、在校期间“2023-2024各科成绩”大于等于85分"`
      }else if(DataTest === '["1、在校期间“2018-2019”无违纪情况","2、2023-2024学年综测总分，班级排名前%3","3、在校期间"2023-2024"各科成绩大于等60分"]'){
        res.data[i].restriction = `"1、在校期间“2018-2019”无违纪情况",
"2、2023-2024学年综测总分，班级排名前%3",
"3、在校期间"2023-2024"各科成绩大于等60分"`
      }
      console.log(res.data[i].restriction)

    }

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
