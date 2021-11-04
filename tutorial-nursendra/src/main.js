import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import ChildSlotGlobal from './components/ChildSlotGlobal.vue'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,

    ChildSlotGlobal,

    render: h => h(App)
}).$mount('#app')