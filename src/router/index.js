import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/Layout'

Vue.use(VueRouter)

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
          icon: '../../首页.png'
        }
      },
      {
        path: '/NanAssessmentManagement',
        name: 'NanAssessmentManagement',
        component: () => import('@/views/NanAssessmentManagement'),
        meta: {
          title: '考核管理',
          icon: '../../考核管理.png'
        }
      },
      {
        path: '/NanIdeologicalAndPoliticalTeam',
        name: 'NanIdeologicalAndPoliticalTeam',
        component: () => import('@/views/NanIdeologicalAndPoliticalTeam'),
        meta: {
          title: '思政队伍',
          icon: '../../思政队伍.png'
        }
      },
      {
        path: '/NanPersonalInformation',
        name: 'NanPersonalInformation',
        component: () => import('@/views/NanPersonalInformation'),
        meta: {
          title: '个人信息',
          icon: '../../个人信息.png'
        }
      },
      {
        path: '/NanStudentFinancialAid',
        name: 'NanStudentFinancialAid',
        component: () => import('@/views/NanStudentFinancialAid'),
        meta: {
          title: '学生资助',
          icon: '../../学生资助.png'
        }
      },
      {
        path: '/NanAwardsAndAwards',
        name: 'NanAwardsAndAwards',
        component: () => import('@/views/NanAwardsAndAwards'),
        meta: {
          title: '评奖评优',
          icon: '../../评奖评优.png'
        }
      },
      {
        path: '/NanWorkStudy',
        name: 'NanWorkStudy',
        component: () => import('@/views/NanWorkStudy'),
        meta: {
          title: '勤工俭学',
          icon: '../../勤工俭学.png'
        }
      },
      {
        path: '/NanDisciplinarySanctions',
        name: 'NanDisciplinarySanctions',
        component: () => import('@/views/NanDisciplinarySanctions'),
        meta: {
          title: '违纪处分',
          icon: '../../违纪处分.png'
        }
      },
      {
        path: '/NanCondominiumManagement',
        name: 'NanCondominiumManagement',
        component: () => import('@/views/NanCondominiumManagement'),
        meta: {
          title: '公寓管理',
          icon: '../../公寓管理.png'
        }
      },
      {
        path: '/NanEverydayMatters',
        name: 'NanEverydayMatters',
        component: () => import('@/views/NanEverydayMatters'),
        meta: {
          title: '日常事务',
          icon: '../../日常事务.png'
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

export default router
