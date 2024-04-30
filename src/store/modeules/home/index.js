import { getHomeNotices, getAllNotices, getHomeDownload } from '@/api'
const state = {
  homeNotices: [],
  allNotices: [],
  homeDownLoad: []
}
const mutations = {
  FETCH_HOMENOTICES(state, data) {
    state.homeNotices = data
  },
  FETCH_ALLNOTICES(state, data) {
    state.allNotices = data
  },
  FETCH_HOMEDOWNLOAD(state, data) {
    state.homeDownLoad = data
  }
}
const actions = {
  async fetch_HomeNotices({ commit }) {
    const res = await getHomeNotices()
    commit('FETCH_HOMENOTICES', res.data)
  },
  async fetch_AllNotices({ commit }) {
    const res = await getAllNotices()
    commit('FETCH_ALLNOTICES', res.data)
  },
  async fetch_HomeDownload({ commit }) {
    const res = await getHomeDownload()
    commit('FETCH_HOMEDOWNLOAD', res.data)
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
