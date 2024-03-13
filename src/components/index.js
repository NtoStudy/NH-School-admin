// 导入 Vue 框架
import Vue from 'vue'
// 导入 NanTag 组件
import NanTag from '@/components/NanTag'
import CardContainer from '@/components/card-container'
// 将 SvgIcon 组件注册为全局组件
Vue.component('nan-tag', NanTag)
Vue.component('card-container', CardContainer)
