import Vue from 'vue'
import Vuex from 'vuex'
import Posters from '../../posters.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posters: [...Posters]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
