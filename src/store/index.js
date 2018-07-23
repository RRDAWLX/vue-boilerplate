import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },

  getters: {
    count: state => state.count
  },

  mutations: {},

  actions: {}
})

export default store