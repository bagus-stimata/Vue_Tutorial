import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//main.js
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

import axios from 'axios'

import vuetify from './plugins/vuetify'
axios.defaults.baseURL = 'http://localhost:8080/rest/'


Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')