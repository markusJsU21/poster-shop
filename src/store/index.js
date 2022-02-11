import Vue from 'vue'
import Vuex from 'vuex'
import Posters from '../../posters.json'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    posters: [...Posters],
    basket: [],
    currentPage: 0,
    pageCounter: 6
  },
  mutations: {
    addToBasket(state, poster){
      if(!state.basket.includes(poster)){
        state.basket.push(poster)
      }
      else{
        state.basket[state.basket.indexOf(poster)].amount ++
      }
    },
    decreaseAmount(state, poster){
      state.basket[state.basket.indexOf(poster)].amount --
    },
    increaseAmount(state, poster){
      state.basket[state.basket.indexOf(poster)].amount ++
    },
    forward(state){
      state.currentPage += 6
      state.pageCounter +=6
    },
    back(state){
      state.currentPage -= 6
      state.pageCounter -=6
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
    },
    forward(context){
      context.commit('forward')
    },
    back(context){
      context.commit('back')
    }
  },
  getters:{
    total(state){
      let totalamount = 0
      for(let item of state.basket){
          totalamount += (item.price * item.amount)
      }
      return totalamount
  },
  basket(state){
    return state.basket
  },
  threeCardView(state){
    return state.posters.slice(state.currentPage, state.pageCounter)
  }
  },
  modules: {
  }
})
