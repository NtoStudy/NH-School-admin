import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const request = axios.create({
  baseURL: '/api',
  timeout: 5000
})

request.interceptors.request.use((config) => {
  nprogress.start()
  return config
})

request.interceptors.response.use(
  (res) => {
    nprogress.done()
    return res.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const getHomeNotices = () => request({ url: '/notices' })

export const getAllNotices = () => request({ url: '/allNoticesList' })

export const getHomeDownload = () => request({ url: '/homeDownload' })

export const getHomeShortcut = () => request({ url: '/homeShortcut' })

export const getAllChooseItemArray = () =>
  request({ url: '/allChooseItemArray' })
