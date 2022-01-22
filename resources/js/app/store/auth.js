import axios from 'axios'

const auth = {
    state: {},
    actions: {
        async A_LOGIN ({ commit }, payload) {
            try {
                await axios.get('sanctum/csrf-cookie')
                    .then(async () => {
                        const user = await axios({ url: 'api/auth/login', method: 'POST', data: payload })
                        if (user.data.status) {
                            commit('M_SUCCESS_AUTH', user.data.user)
                        }
                    })

            } catch (error) {
                commit('M_ERROR_AUTH')
                throw error.response.data.errors
            }
        },

        async A_REGISTER ({commit}, payload) {
            try {
                await axios.get('sanctum/csrf-cookie')
                    .then(async () => {
                        const user =await axios({url: '/api/auth/register', method: 'POST', data: payload})
                        if (user.data.status) {
                            commit('M_SUCCESS_AUTH', user.data.user)
                            return;
                        }
                        return false
                    })
                return true

            } catch (error) {
                commit('M_ERROR_AUTH')
                throw error.response.data.errors
            }
        },

        async A_ME({commit, state}) {
            try {
                await axios.get('sanctum/csrf-cookie')
                    .then(async () => {
                        const user = await axios({url: '/api/auth/me', method: 'GET'})
                        commit('M_SUCCESS_AUTH', user.data.user)
                    })

            } catch (err) {
                commit('M_ERROR_AUTH')
                //throw false
            }
        },

        async A_LOGOUT({ commit }) {
            try {
                await axios.get('sanctum/csrf-cookie')
                    .then(async () => {
                        await axios({url: '/api/auth/logout', method: 'GET'})
                            .then(res => {
                                commit('M_ERROR_AUTH')
                            })
                    })

            } catch (err) {
                console.log('errors')
                throw false
            }
        }
    },

    mutations: {
    },
    getters: {
    }
}

export default auth
