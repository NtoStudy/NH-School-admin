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
        component: () => import('@/views/NanHome')
      },
      {
        path: '/NanSystemMaintenance',
        component: () => import('@/views/NanSystemMaintenance')
      },
      {
        path: '/NanAssessmentManagement',
        component: () => import('@/views/NanAssessmentManagement')
      },
      {
        path: '/NanIdeologicalAndPoliticalTeam',
        component: () => import('@/views/NanIdeologicalAndPoliticalTeam')
      },
      {
        path: '/NanPersonalInformation',
        component: () => import('@/views/NanPersonalInformation')
      },
      {
        path: '/NanStudentFinancialAid',
        component: () => import('@/views/NanStudentFinancialAid')
      },
      {
        path: '/NanAwardsAndAwards',
        component: () => import('@/views/NanAwardsAndAwards')
      },
      {
        path: '/NanWorkStudy',
        component: () => import('@/views/NanWorkStudy')
      },
      {
        path: '/NanDisciplinarySanctions',
        component: () => import('@/views/NanDisciplinarySanctions')
      },
      {
        path: '/NanCondominiumManagement',
        component: () => import('@/views/NanCondominiumManagement')
      },
      {
        path: '/NanEverydayMatters',
        component: () => import('@/views/NanEverydayMatters')
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
