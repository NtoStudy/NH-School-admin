import router from '@/router'
import store from './store'
import axios from 'axios'

// 将管理页面单独写出来
let arr = [
  {
    path: '/NanPersonalInformation',
    name: 'NanPersonalInformation',
    component: () => import('@/views/NanPersonalInformation'),
    meta: {
      title: '个人信息',
      icon: { url: require('@/assets/个人信息.png') }
    }
  },
  {
    path: '/NanInfoProcess',
    name: 'NanInfoProcess',
    component: () => import('@/views/NanInfoProcessing'),
    meta: {
      title: '信息处理',
      icon: { url: require('@/assets/考核管理.png') }
    },
    redirect: '/NanInfoProcess/DormitoryInfo',
    children: [
      {
        path: '/NanInfoProcess/DormitoryInfo',
        name: 'DormitoryInfo',
        component: () =>
          import('@/views/NanInfoProcessing/children/DormitoryInformation')
      },
      {
        path: '/NanInfoProcess/FinancialInfo',
        name: 'FinancialInfo',
        component: () =>
          import('@/views/NanInfoProcessing/children/FinancialInformation')
      },
      {
        path: '/NanInfoProcess/LeaveInfo',
        name: 'LeaveInfo',
        component: () =>
          import('@/views/NanInfoProcessing/children/LeaveInformation')
      },
      {
        path: '/NanInfoProcess/StayInfo',
        name: 'StayInfo',
        component: () =>
          import('@/views/NanInfoProcessing/children/StayInformation')
      }
    ]

  }
]

arr.forEach(item => {
  router.addRoute(item)
})
