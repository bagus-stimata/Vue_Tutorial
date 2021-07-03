import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    currentJoke: 'tes bos',
    allJokes: []
  },
  mutations: {
    increaseCounter(state){
      state.counter++
    },
    decreaseCounter(state){
      state.counter--
    },
    setCurrentJoke(state, payload){
        state.currentJoke = payload
        state.allJokes.push(payload)
    }
  },
  actions: {
    increaseCounterDispatch(){
      this.commit('increaseCounter')
    },
    decreaseCounterDispatch(){
      this.commit('decreaseCounter')
    }

  },
  modules: {
  },
  getters: {
    getCurrentJoke(state){
      return state.currentJoke
    }
  }
})
