import store from '../store/index'

export default async function (to, from, next) {
    if (!store.getters.GET_STATUS_LOGIN) {
        await store.dispatch('A_ME')
        if (store.getters.GET_STATUS_LOGIN === true) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }

}
