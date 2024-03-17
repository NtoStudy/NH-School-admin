import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/Layout'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(VueRouter)

// 解决编程式路由跳转到当前路由抛出 NavigationDuplicated 的警告错误
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  (resolve && reject) ? originReplace.call(this, location, resolve, reject) : originReplace.call(this, location, () => { }, () => { })
}

export const AsideRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/Home',
    children: [
      {
        path: '/Home',
        name: 'home',
        component: () => import('@/views/NanHome'),
        meta: {
          title: '首页',
          icon: { url: require('../assets/首页.png') }
        }
      },
      {
        path: '/NanPersonalInformation',
        name: 'NanPersonalInformation',
        component: () => import('@/views/NanPersonalInformation'),
        meta: {
          title: '个人信息',
          icon: { url: require('../assets/个人信息.png') }
        }
      },
      {
        path: '/SystemMaintenance',
        name: 'SystemMaintenance',
        component: () => import('@/views/SystemMaintenance'),
        meta: {
          title: '站内维护',
          icon: { url: require('../assets/首页.png') }
        }
      },
      {
        path: '/NanAssessmentManagement',
        name: 'NanAssessmentManagement',
        component: () => import('@/views/NanAssessmentManagement'),
        meta: {
          title: '考核管理',
          icon: { url: require('../assets/考核管理.png') }
        }
      },
      {
        path: '/NanIdeologicalAndPoliticalTeam',
        name: 'NanIdeologicalAndPoliticalTeam',
        component: () => import('@/views/NanIdeologicalAndPoliticalTeam'),
        meta: {
          title: '思政队伍',
          icon: { url: require('../assets/思政队伍.png') }
        }
      },
      {
        path: '/NanStudentFinancialAid',
        name: 'NanStudentFinancialAid',
        component: () => import('@/views/NanStudentFinancialAid'),
        meta: {
          title: '学生资助',
          icon: { url: require('../assets/学生资助.png') }
        }
      },
      {
        path: '/NanAwardsAndAwards',
        name: 'NanAwardsAndAwards',
        component: () => import('@/views/NanAwardsAndAwards'),
        meta: {
          title: '评奖评优',
          icon: { url: require('../assets/评奖评优.png') }
        }
      },
      {
        path: '/NanWorkStudy',
        name: 'NanWorkStudy',
        component: () => import('@/views/NanWorkStudy'),
        meta: {
          title: '勤工俭学',
          icon: { url: require('../assets/勤工俭学.png') }
        }
      },
      {
        path: '/NanDisciplinarySanctions',
        name: 'NanDisciplinarySanctions',
        component: () => import('@/views/NanDisciplinarySanctions'),
        meta: {
          title: '违纪处分',
          icon: { url: require('../assets/违纪处分.png') }
        }
      },
      {
        path: '/NanCondominiumManagement',
        name: 'NanCondominiumManagement',
        component: () => import('@/views/NanCondominiumManagement'),
        meta: {
          title: '公寓管理',
          icon: { url: require('../assets/公寓管理.png') }
        }
      },
      {
        path: '/NanEverydayMatters',
        name: 'NanEverydayMatters',
        component: () => import('@/views/NanEverydayMatters'),
        meta: {
          title: '日常事务',
          icon: { url: require('../assets/日常事务.png') }
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: () => import('@/views/NanLogin')
    },
    {
      path: '/404',
      component: () => import('@/views/404')
    },
    ...AsideRoutes
  ]
})

// 路由全局前置守卫
router.beforeEach((to, from, next) => {
  console.log(to, from, next)
  nprogress.start()
  next()
})

// 路由全局后置守卫
router.afterEach((to, from) => {
  nprogress.done()
})
export default router
