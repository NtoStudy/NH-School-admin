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

// 学生登录接口
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
export const getRelievePunishment = (violationId) => request.post(
  `/student/violationApplication?violationId=${violationId}`,
)

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
export const getApplyingScholarships = () => request.post(
  '/student/scholarshipInformation')

// 勤工俭学

// 查询工作信息
export const getWorkInformation = (page, pageSize, key) => request({
  url:'/student/jobInformation',
  method:'POST',
  data:{
    page: page,
    pageSize: pageSize,
    key: key
  }
})

// 新增工作申请
export const getJobApplication = (jobs) => request({
  url: '/student/jobApplication',
  method: 'POST',
  data: {
    jobs: jobs
  }
})

// 查询已完成工作
export const getCompletedWork = () => request({url:'/student/jobApplication'})



// 班委申请

// 查询班委已有信息
export const getCommitteeInformation = () => request({url:'/student/classInformation'})


// 学生申请班委
export const getCommitteeApplication = (classJob) => request({
  url: '/student/classInformation',
  method: 'POST',
  data: {
    classJob: classJob
  }
})




// 留校申请

// 添加留校申请
export const getApplicationCampus = (stayBegin, stayEnd) => request({
  url:'/student/stayApplication',
  method:'POST',
  data:{
    stayBegin: stayBegin,
    stayEnd: stayEnd
  }
})

// 查询留校申请进度
export const getProgressCampus = () => request({url:'/student/stayApplication'})



// 请假申请

// 添加请假申请
export const getLeaveApplication = (excuseDays,excuseType,excuseBegin,excuseEnd,excuseReason) => request({
  url:'/student/excuseApplication',
  method:'POST',
  data:{
    excuseDays: excuseDays,
    excuseType: excuseType,
    excuseBegin: excuseBegin,
    excuseEnd: excuseEnd,
    excuseReason: excuseReason
  }
})

// 查询请假申请信息
export const getLeaveInformation = () => request({
  url:'/student/excuseApplication'
})



// 投诉申请

// 投诉申请
export const getComplainApplication = (complaintTarget,complaintReason) => request({
  url:'/student/complaint',
  method:'POST',
  data:{
    complaintTarget: complaintTarget,
    complaintReason: complaintReason
  }
})

// 查看投诉
export const getComplaintProgress = (complaintTarget,complaintReason) => request({
  url:'/student/complaint',
  method:'GET',
  data:{
    complaintTarget: complaintTarget,
    complaintReason: complaintReason
  }
})

// 宿舍维修

// 添加宿舍维修
export const getAddRepair = (requestContext,dormitoryAddress) => request({
  url:'/student/dormitoryRepair',
  method:'POST',
  data:{
    requestContext: requestContext,
    dormitoryAddress: dormitoryAddress
  }
})

// 查看维修进度
export const getMaintenanceProgress = () => request({url:'/student/dormitoryRepair'})




// 以下是管理员的api接口

// 管理员登录接口
export const getAdminLogin = (username = 'jinyong', password = '123456') => request({
  url: '/admin/login',
  method:'POST',
  data: {
    username: username,
    password: password
  }
})

// 查询奖学金信息
export const getAdminScholarshipInfo = () => request({
  url:'adminCommon/scholarshipStuInformationAll',
  method:'GET',
})


// 审核奖学金
export const getAdminReviewScholarships = (result,id) => request({
  url: 'admin/examineScholarship',
  method:'POST',
  params:{
    result: result,
    id: id
  }
})

export const getAdminQueryWork = (page, pageSize) => request({
  url:'adminCommon/jobInformation',
  method:'POST',
  data:{
    page:page,
    pageSize: pageSize
  }
})

// 查询勤工助学申请
// export const getAdminQueryWork = () => request({
//   url:'adminCommon/jobApplicationAll',
//   method:'GET',
// })

// 发布勤工助学申请
export const getAdminPublishWork = (data) => request({
  url:'admin/jobInformation',
  method:'POST',
  data:data
})

// 修改勤工助学申请
export const getAdminModifyWork = (data) => request({
  url:'admin/jobInformation',
  method:'PUT',
  data:data
})



// 审核勤工助学信息
export const getAdminReviewWork = (stuId,jobName) => request({
  url:'admin/jobWorking',
  method:'POST',
  data:{
    stuId: stuId,
    jobName: jobName
  }
})

// 删除勤工助学申请
export const getAdminDeleteWork = (ids) => request({
  url:'admin/jobInformation',
  method:'DELETE',
  params: {
    ids: ids
  }
})

// 查询班委申请信息
export const getAdminQueryMonitor = () => request({
  url:'adminCommon/classInformationAll',
  method:'GET',
})

// 查询处分解除申请
export const getAdminQueryViolation = () => request({
  url:'adminCommon/violationApplicationAll',
  method:'GET',
})

// 审核处分解除申请
export const getAdminReviewViolation = (result,id) => request({
  url:'admin/examineViolation',
  method:'POST',
  params:{
    result: result,
    id: id
  }
})

// 请假申请信息
export const getAdminQueryLeave = () => request({
  url:'adminCommon/excuseApplicationAll',
  method:'GET',
})

// 审核请假信息
export const getAdminReviewLeave = (result,id) => request({
  url:'counsellor/examineExcuse',
  method:'POST',
  params:{
    result: result,
    id: id
  }
})


// 宿舍维修信息查询
export const getAdminQueryRepair = () => request({
  url:'adminCommon/dormitoryRepairApplicationAll',
  method:'GET',
})

// 宿舍维修申请处理
export const getAdminReviewRepair = (id,handleResult,reply) => request({
  url:'admin/dormitoryRepair',
  method:'POST',
  data:{
    id: id,
    handleResult: handleResult,
    reply: reply
  }
})




// 不一定用到的接口
// 查询辅导员信息
export const getAdminQueryInfo = (gender,name) => request({
  url:'admin/counsellorInformation',
  method:'GET',
  data:{
    gender: gender,
    name: name
  }
})

// 删除辅导员信息
export const getAdminDeleteInfo = (ids) => request({
  url:'admin/counsellorManage',
  method:'DELETE',
  data: ids
})



// 发布通知通告
export const getAdminPublishNotice = (data) => request({
  url:'admin/Notice',
  method:'POST',
  data:data
})

// 修改通知通告
export const getAdminModifyNotice = (data) => request({
  url:'admin/updateNotice',
  method:'POST',
  data:data
})

// 查询通知通告
export const getAdminQueryNotice = () => request({
  url:'admin/notice',
  method:'GET',
})
