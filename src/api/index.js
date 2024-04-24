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

export const getAllChooseItemArray = () => request({ url: '/allChooseItemArray' })

export const reqGetScholarship = () => request({ url:'http://127.0.0.1:4523/m2/4129530-0-default/163961293'})

export const GetDisciplinary = () => request({ url:'http://127.0.0.1:4523/m1/4129530-0-default/student/violationInformation' })
