/**
 * 侧边栏折叠
 * element
 * 1. isCollapse 【el-menu】菜单是否折叠 defaultValue: false
 * 2. asideWidth 【el-aside】侧边栏宽度 defaultValue: 200px
 * 3. switchButtonSize 【NanSwitch】主题切换按钮的大小 defaultValue: big
 * ***/
const state = {
  isCollapse: false,
  asideWidth: '200px',
  switchButtonSize: 'big',
  isFold: 'fold'
}
const mutations = {
  theSidebarCollapses(state) {
    state.isCollapse = !state.isCollapse
    state.asideWidth = state.isCollapse ? '80px' : '200px'
    state.switchButtonSize = state.isCollapse ? 'big' : 'small'
    state.isFold = state.isCollapse ? 'fold' : 'unfold'
  }
}
const actions = {}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
