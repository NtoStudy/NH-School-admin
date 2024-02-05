import { getHomeNotices, getAllNotices } from '@/api'
const state = {}
const mutations = {
  FETCHHOMENOTICES () {},
  GETALLNOTICES () {}
}
const actions = {
  async FETCHHomeNotices ({ commit }) {
    await getHomeNotices()
  },
  async fetchAllNotices ({ commit }) {
    await getAllNotices()
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
