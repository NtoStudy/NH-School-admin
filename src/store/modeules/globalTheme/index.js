const state = {
  theme: 'light'
}
const mutations = {
  setTheme (state, theme) {
    state.theme = theme
    localStorage.setItem('theme', theme)
    document.head.querySelector('#theme-link').setAttribute('href', `./static/css/theme-${theme}.css`)
  },
  getTheme (state) {
    state.theme = localStorage.getItem('theme') || 'light'
    document.head.querySelector('#theme-link').setAttribute('href', `./static/css/theme-${state.theme}.css`)
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
