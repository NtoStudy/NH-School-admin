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
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  resolve && reject
    ? originReplace.call(this, location, resolve, reject)
    : originReplace.call(
        this,
        location,
        () => {},
        () => {}
      )
}

export const AsideRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/login',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/NanHome'),
        meta: {
          title: '首页',
          icon: { url: require('../assets/首页.png') }
        }
      },
      // 学生和管理员公用的页面
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
          title: '系统管理',
          icon: { url: require('../assets/首页.png') }
        },
        redirect: '/SystemMaintenance/Password',
        children: [
          {
            path: '/SystemMaintenance/Password',
            name: 'PasswordModification',
            component: () => import('@/views/SystemMaintenance/children/PasswordModification'),
          },

          {
            path: '/SystemMaintenance/com',
            name: 'complain',
            component: () => import('@/views/SystemMaintenance/children/complain'),
          }
        ]
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
        },
        redirect: '/NanAwardsAndAwards/notApplying',
        children: [
          {
            path: '/NanAwardsAndAwards/requested',
            name: 'AndAwardsRequested',
            component: () =>
              import('@/views/NanAwardsAndAwards/children/AndAwardsRequested')
          },
          {
            path: '/NanAwardsAndAwards/notApplying',
            name: 'AndAwardsNotApplying',
            component: () =>
              import('@/views/NanAwardsAndAwards/children/AndAwardsNotApplying')
          }
        ]
      },
      {
        path: '/NanWorkStudy',
        name: 'NanWorkStudy',
        component: () => import('@/views/NanWorkStudy'),
        meta: {
          title: '勤工俭学',
          icon: { url: require('../assets/勤工俭学.png') }
        },
        redirect: '/NanWorkStudy/requested',
        children: [
          {
            path: '/NanWorkStudy/requested',
            name: 'AllPositions',
            component: () =>
              import('@/views/NanWorkStudy/children/AllPositions')
          },
          {
            path: '/NanWorkStudy/notApplying',
            name: 'PositionPersonnel',
            component: () =>
              import('@/views/NanWorkStudy/children/PositionPersonnel')
          }
        ]
      },
      {
        path: '/NanDisciplinarySanctions',
        name: 'NanDisciplinarySanctions',
        component: () => import('@/views/NanDisciplinarySanctions'),
        meta: {
          title: '违纪处分',
          icon: { url: require('../assets/违纪处分.png') }
        },
        redirect: '/NanDisciplinarySanctions/requested',
        children: [
          {
            path: '/NanDisciplinarySanctions/requested',
            name: 'DisciplinaryAppeal',
            component: () =>
              import('@/views/NanDisciplinarySanctions/children/DisciplinaryAppeal')
          },

          {
            path: '/NanDisciplinarySanctions/notApplying',
            name: 'TerminationDisciplinaryAction',
            component: () =>
              import('@/views/NanDisciplinarySanctions/children/TerminationDisciplinaryAction')
          }
        ]
      },
      {
        path: '/NanCondominiumManagement',
        name: 'NanCondominiumManagement',
        component: () => import('@/views/NanCondominiumManagement'),
        meta: {
          title: '公寓管理',
          icon: { url: require('../assets/公寓管理.png') }
        },
        redirect: '/NanCondominiumManagement/requested',
        children: [
          {
            path: '/NanCondominiumManagement/requested',
            name: 'ApartmentDiscipline',
            component: () =>
              import('@/views/NanCondominiumManagement/children/ApartmentDiscipline')
          },

          {
            path: '/NanCondominiumManagement/notApplying',
            name: 'ChangeApplication',
            component: () =>
              import('@/views/NanCondominiumManagement/children/ChangeApplication')
          },
        ]
      },
      {
        path: '/NanEverydayMatters',
        name: 'NanEverydayMatters',
        component: () => import('@/views/NanEverydayMatters'),
        meta: {
          title: '日常事务',
          icon: { url: require('../assets/日常事务.png') }
        },
        redirect: '/NanEverydayMatters/behavior',
        children: [
          {
            path: '/NanEverydayMatters/behavior',
            name: 'DailyBehavior',
            component: () =>
              import('@/views/NanEverydayMatters/children/DailyBehavior')
          },

          {
            path: '/NanEverydayMatters/activity',
            name: 'groupActivity',
            component: () =>
              import('@/views/NanEverydayMatters/children/groupActivity')
          },

          {
            path: '/NanEverydayMatters/management',
            name: 'LeaveManagement',
            component: () =>
              import('@/views/NanEverydayMatters/children/LeaveManagement')
          },

          {
            path: '/NanEverydayMatters/site',
            name: 'SiteManagement',
            component: () =>
              import('@/views/NanEverydayMatters/children/SiteManagement')
          },

          {
            path: '/NanEverydayMatters/stay',
            name: 'StayCampus',
            component: () =>
              import('@/views/NanEverydayMatters/children/StayCampus')
          }
        ]
      },
    ],
  },
]


export const AdminAsideRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/login',
    children: [
      {
        path: '/NanAdminHome',
        name: 'NanAdminHome',
        component: () => import('@/views/NanAdminHome'),
        meta: {
          title: '首页',
          icon: { url: require('../assets/首页.png') }
        }
      },
      {
        path: '/NanAdminInfo',
        name: 'NanAdminInfo',
        component: () => import('@/views/NanAdminInfo'),
        meta: {
          title: '个人信息',
          icon: { url: require('../assets/个人信息.png') }
        }
      },
      {
        path: '/NanAdminInfoProcess',
        name: 'NanAdminInfoProcess',
        component: () => import('@/views/NanAdminInfoProcess'),
        meta: {
          title: '信息处理',
          icon: { url: require('../assets/考核管理.png') }
        },
        redirect: '/NanAdminInfoProcess/DormitoryInfo',
        children: [
          {
            path: '/NanAdminInfoProcess/DormitoryInfo',
            name: 'DormitoryInfo',
            component: () =>
              import('@/views/NanAdminInfoProcess/children/DormitoryInformation')
          },
          {
            path: '/NanAdminInfoProcess/FinancialInfo',
            name: 'FinancialInfo',
            component: () =>
              import('@/views/NanAdminInfoProcess/children/FinancialInformation')
          },
          {
            path: '/NanAdminInfoProcess/LeaveInfo',
            name: 'LeaveInfo',
            component: () =>
              import('@/views/NanAdminInfoProcess/children/LeaveInformation')
          },
          {
            path: '/NanAdminInfoProcess/StayInfo',
            name: 'StayInfo',
            component: () =>
              import('@/views/NanAdminInfoProcess/children/StayInformation')
          }
        ]
      },
      {
        path:'/NanAdminPunish',
        name:'NanAdminPunish',
        component:()=>import('@/views/NanAdminPunish'),
        meta:{
          title:'违纪处分',
          icon:{url:require('../assets/违纪处分.png')}
        }
      },
      {
        path:'/NanAdminWorkStudy',
        name:'NanAdminWorkStudy',
        component:()=>import('@/views/NanAdminWorkStudy'),
        meta:{
          title:'勤工助学',
          icon: {url:require('../assets/勤工俭学.png')}
        },


      },
      {
        path:'NanAdminMonitor',
        name:'NanAdminMonitor',
        component:()=>import('@/views/NanAdminMonitor'),
        meta:{
          title:'班委申请',
          icon:{url:require('../assets/思政队伍.png')}
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
    ...AdminAsideRoutes,
    ...AsideRoutes


  ]
})

// 路由全局前置守卫
router.beforeEach((to, from, next) => {
  console.log(to, from, next)
  // console.log("debugger:", to)
  nprogress.start()
  next()
})

// 路由全局后置守卫
router.afterEach((to, from) => {
  nprogress.done()
})
export default router
