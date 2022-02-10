import Vue from 'vue'
import Vuex from 'vuex'
import Posters from '../../posters.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posters: [...Posters],
    basket: [],
  },
  mutations: {
    addToBasket(state, poster){
      if(!state.basket.includes(poster)){
        state.basket.push(poster)
      }
      else{
        state.basket[state.basket.indexOf(poster)].amount ++
        // console.log(typeof(state.basket[state.basket.indexOf(poster)].amount))
      }
    },
    decreaseAmount(state, poster){
      state.basket[state.basket.indexOf(poster)].amount --
    },
    increaseAmount(state, poster){
      state.basket[state.basket.indexOf(poster)].amount ++
    }
  },
  actions: {
    addToBasket(context, poster){
      context.commit('addToBasket', poster)
    },
    decreaseAmount(context, poster){
      context.commit('decreaseAmount', poster)
    },
    increaseAmount(context, poster){
      context.commit('increaseAmount', poster)
    }
  },
  modules: {
  }
})
