import { getHomeNotices, getAllNotices } from '@/api'
const state = {
  homeNotices: [],
  allNotices: []
}
const mutations = {
  FETCHHOMENOTICES (state, data) {
    state.homeNotices = data
  },
  FETCHALLNOTICES (state, data) {
    state.allNotices = data
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
