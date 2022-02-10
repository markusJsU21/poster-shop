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
        console.log(state.basket)
      }
     
      
    }
  },
  actions: {
    addToBasket(context, poster){
      context.commit('addToBasket', poster)
    }
  },
  modules: {
  }
})
