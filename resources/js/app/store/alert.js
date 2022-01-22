const alert = {
    state: {
        alertText: '',
        isShowAlert: false,
        alertType: 'success'
    },

    actions: {
        async A_SET_ALERT ({ commit }, payload) {
            await commit('M_SET_ALERT', payload)
        }
    },

    mutations: {
        M_SET_ALERT (state, data) {
            state.alertText = data.text
            state.isShowAlert = true
            state.alertType = data.type
            setTimeout(() => {
                state.alertText = ''
                state.isShowAlert = false
                state.alertType = 'success'
            }, data.timeout)
        }
    },
    getters: {
        GET_ALERT_TEXT: (state) => {
            return state.alertText
        },
        GET_ALERT_TYPE: (state) => {
            return state.alertType
        },
        GET_SHOW_ALERT: (state) => {
            return state.isShowAlert
        }
    }
}

export default alert
