import router from '@/router/index.js'
const state = {
  // 存放所有访问过的路由
  visitedViews: []
}
const mutations = {
  DELETE_TAGTEM(state, { name, isCurrent }) {
    const index = state.visitedViews.findIndex((item) => item.path === name)
    // 判断用户删除的是否是当前展示的路由
    if (isCurrent) {
      state.visitedViews.splice(index, 1)
      const newIndex = index === 0 ? 0 : index - 1
      // 检测 visitedViews 是否长度 > 0
      if (state.visitedViews[newIndex]) {
        router.push({ path: state.visitedViews[newIndex].path })
      } else {
        router.push({ path: '/Home' })
      }
    } else {
      state.visitedViews.splice(index, 1)
    }
  },
  ADD_TAGITEM(state, value) {
    const isAtVisitedViewsArray = state.visitedViews.find((item) => {
      return item.path === value.path
    })
    if (isAtVisitedViewsArray || value.path === '/Home') return
    state.visitedViews.push(value)
  }
}
const actions = {
  delete_TagItem({ commit }, value) {
    commit('DELETE_TAGTEM', value)
  },
  add_TagItem({ commit }, value) {
    commit('ADD_TAGITEM', value)
  }
}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
