import axios from 'axios'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Accept'] = 'application/json';

const auth = {
    state: {
        statusLogin: false,
        user: {}
    },

    mutations: {
        M_SUCCESS_AUTH (state, payload) {
            state.user = payload
            state.statusLogin = true
        },

        M_ERROR_AUTH (state) {
            state.statusLogin = false
            state.user = {}
        }
    },
    getters: {
        GET_STATUS_LOGIN: (state) => { return state.statusLogin },
        GET_USER_NAME: (state) => { return state.user.name  },
    }
}

export default auth
