import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { getLocalStorage } from '@/utils/catch'
const token = getLocalStorage('token')
const request = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'token': token
  }
})

request.interceptors.request.use((config) => {
  if (!config.data) {
    config.data = true // 解决请求没有参数时添加不上Content-Type问题
  }
  // console.log(config)
  // console.log(config.headers)
  // config.headers.token = token
  // config.headers['Content-Type'] = 'application/json;charset=utf-8'
  nprogress.start()
  return config
});


request.interceptors.response.use(
  (res) => {
    nprogress.done()
    return res.data
  },
  (error) => {
    return Promise.reject(error)
  }
)


// 登录接口
export const getUserLogin = (stuId = '220206636', password = '123456') => request({
  url: '/student/login',
  method:'POST',
  data: {
    stuId: stuId,
    password: password
  }
})


// 处分操作

// 处分查询接口
export const getPunishmentList = () => request({ url: '/student/violationInformation'})

// 解除处分信息接口
// export const getRelievePunishment = () => request.post('/student/violationApplication')

// 解除处分申请查询
export const getProgressQuery = () => request({url:'/student/violationApplication'})


// 个人信息

// 查询个人信息
export const getQueryPersonalInformation = () => request({url:'/student/information'})

// 添加个人信息
export const getAddPersonalInformation = () => request.post('/student/information')

// 修改个人信息

export const getModifyPersonalInformation = () => request.put('/student/information')

// 学生修改密码

export const getChangePassword = () => request.put('/student/passwordAlter')




// 奖学金

// 查询奖学金基础信息
export const getScholarshipDetails = () => request({url:'/student/scholarship'})

// 查询奖学金进度
export const getScholarshipProgress = () => request({url :'/student/scholarshipStuInformation'})

// 新增奖学金申请
export const getApplyingScholarships = () => request.post('/student/scholarshipInformation')

// 勤工俭学

// 查询工作信息
export const getWorkInformation = () => request({ url:'/student/jobInformation'})

// 新增工作申请
export const getJobApplication = () => request.post('/student/jobInformation')

// 查询已完成工作
export const getCompletedWork = () => request({url:'/student/jobApplication'})



// 班委申请

// 学生申请班委
export const getCommitteeApplication = () => request.post('/student/classInformation')




// 留校申请

// 添加留校申请
export const getApplicationCampus = () => request.post('/student/stayApplication')

// 查询留校申请进度
export const getProgressCampus = () => request({url:'/student/stayApplication'})




// 请假申请

// 添加请假申请
export const getLeaveApplication = () => request.post('/student/excuseApplication')

// 查询请假申请信息
export const getLeaveInformation = () => request({url:'/student/excuseApplication'})




// 投诉申请

// 投诉
export const getComplain = () =>request.post('/student/complaint')

// 查看投诉
export const getComplaintProgress = () => request({url:'/student/complaint'})





// 宿舍维修

// 添加宿舍维修
export const getAddRepair = () => request.post('/student/dormitoryRepair')

// 查看维修进度
export const getMaintenanceProgress = () => request({url:'/student/dormitoryRepair'})


