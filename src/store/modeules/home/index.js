import { getHomeNotices, getAllNotices, getHomeDownload } from '@/api'
const state = {
  homeNotices: [],
  allNotices: [],
  homeDownLoad: []
}
const mutations = {
  FETCHHOMENOTICES (state, data) {
    state.homeNotices = data
  },
  FETCHALLNOTICES (state, data) {
    state.allNotices = data
  },
  FETCHHOMEDOWNLOAD (state, data) {
    state.homeDownLoad = data
  }
}
const actions = {
  async fetchHomeNotices ({ commit }) {
    const res = await getHomeNotices()
    commit('FETCHHOMENOTICES', res.data)
  },
  async fetchAllNotices ({ commit }) {
    const res = await getAllNotices()
    commit('FETCHALLNOTICES', res.data)
  },
  async fetchHomeDownload ({ commit }) {
    const res = await getHomeDownload()
    commit('FETCHHOMEDOWNLOAD', res.data)
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
