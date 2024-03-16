import { getHomeShortcut } from '@/api'

const state = {
  // 用于存放所有的快捷访问方式
  allChooseItemArray: []
}
const mutations = {
  FETCH_AllChoose (state, data) {
    state.allChooseItemArray = data
  },
  ADD_userChoose (name) {},
  DEL_userChoose (name) {}
}
const actions = {
  async fetch_AllChoose ({ commit }) {
    const res = await getHomeShortcut()
    commit('FETCH_AllChoose', res.data)
  }
}
const getters = {
  allChooseItemArrayCount: state => state.allChooseItemArray.length,
  firstTab: state => {
    return state.allChooseItemArray.filter(item => !item.isChoose)
  },
  secondTab: state => {
    return state.allChooseItemArray.filter(item => !item.isChoose && item.category === 'second')
  },
  thirdTab: state => {
    return state.allChooseItemArray.filter(item => !item.isChoose && item.category === 'third')
  },
  fourthTab: state => {
    return state.allChooseItemArray.filter(item => !item.isChoose && item.category === 'fourth')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
