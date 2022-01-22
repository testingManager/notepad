import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth';
import user from './user';
import alert from './alert';


Vue.use(Vuex)
export default new Vuex.Store({
    state: {
    },
    modules: {
        auth,
        user,
        alert
    },
    getters: {

    }
})
