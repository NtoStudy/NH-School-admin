// 对于 axios 进行二次封装
import axios from 'axios'

// 1. 利用 axios 对象的方法 create, 去创建一个 axios 实例
const request = axios.create({
  // create 里面实际就是一个配置对象
  // 基础路径，发起网络请求时，路径中会出现 api
  baseURL: '/api',
  // 代表请求超时的时间
  timeout: 5000
})
// 2. 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
request.interceptors.request.use((config) => {
  // config：配置对象，对象里面有一个属性很重要，headers请求头
  return config
})
// 3. 响应拦截器
request.interceptors.response.use((res) => {
  // 成功的回调函数：服务器响应数据回来之后，响应拦截器可以检测到，可以做一些处理
  console.log(res.data)
}, (error) => {
  // 响应失败的回调函数
  return Promise.reject(new Error('faile:', error))
})

export default request
