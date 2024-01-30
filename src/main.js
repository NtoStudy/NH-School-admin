import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'reset-css' // 清除全局默认样式
import './icons' // 处理 svg 图标
import './utils/elementRequired.js' // 按需导入 element-ui 组件
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
