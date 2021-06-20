import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    iconfont: 'md',
    theme: {
        primary: '#327f9c',
        success: '#74a39e',
        info: '#ffaa2c',
        error: '#f83e70'
    }
})