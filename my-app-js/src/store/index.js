import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        counter: 0,
        colorCode: 'red'
    },
    mutations: {
        //using commit
        decreaseCounter(state, randomNumber) {
            state.counter -= randomNumber
        },
        increaseCounter(state, randomNumber) {
            state.counter += randomNumber
        },
        setColorCode(state, newValue) {
            state.colorCode = newValue
        }
    },
    actions: {
        //using dispatch
        decreaseCounter({ commit }) {
            axios('https://www.random.org/integers/?num=1&min=1&max=5&col=5&base=10&format=plain&rnd=new').then(response => {
                // console.log('counter: ', response)
                commit('decreaseCounter', response.data)
            });
        },
        increaseCounter({ commit }) {
            axios('https://www.random.org/integers/?num=1&min=1&max=5&col=5&base=10&format=plain&rnd=new').then(response => {
                // console.log('counter: ', response)
                commit('increaseCounter', response.data)
            });

        }
    },
    getters: {
        counterSquared(state) {
            return state.counter * state.counter
        }
    },
    modules: {}
})