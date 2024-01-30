// axios进行二次封装
import axios from 'axios'
// 进度条
// 创建axios实例[创建出来的实例即为axios，只不过可以配置一些东西]
const mock = axios.create({
  // 可以给请求路径中添加一些参数
  baseURL: '/mock',
  // 设置请求时间（5S）
  timeout: 5000
})

// 请求拦截器:在发请求之前可以检测到，可以干一些事情
mock.interceptors.request.use((config) => {
  return config
})

// 响应拦截器：服务器的数据已经返回了，可以干一些事情
mock.interceptors.response.use((res) => {
  return res.data
}, (error) => {
  // 终止promise链
  return Promise.reject(error)
})

export default mock
