import store from '../store/index'

export default async function (to, from, next) {
    await store.dispatch('A_ME')
    if (store.getters.GET_STATUS_LOGIN) {
        next('/dashboard')
    } else {
        next()
    }
}
