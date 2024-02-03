import axios from 'axios'

const request = axios.create({
  baseURL: '/api',
  timeout: 5000
})
request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use((res) => {
  console.log(res.data)
}, (error) => {
  return Promise.reject(new Error('faile:', error))
})
