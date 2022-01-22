import Vue from 'vue'
import VueRouter from 'vue-router'
import authGuard from "./authGuard";
import isLogged from "./isLogged";


Vue.use(VueRouter)
const routes = [
    {
        path: '/dashboard',
        component: () => import('../views/Home'),
        beforeEnter: authGuard
    },
    {
        path: '/register',
        component: () => import('../views/auth/Register'),
        beforeEnter: isLogged
    },
    {
        path: '/login',
        component: () => import('../views/auth/Login'),
        beforeEnter: isLogged
    },
    {
        path: '/timestamp',
        component: () => import('../views/timestamp/Timestamp'),
        beforeEnter: authGuard
    },
    {
        path: '/base64',
        component: () => import('../views/base64/Base64'),
        beforeEnter: authGuard
    },
    /* category */
    {
        path: '/category/:name/:id',
        component: () => import('../views/category/ListSections'),
        beforeEnter: authGuard
    },
    {
        path: '/add-category/:id?',
        component: () => import('../views/category/AddCategory'),
        beforeEnter: authGuard
    },

    /* section */
    {
        path: '/category/:categoryId/section/:sectionId',
        component: () => import('../views/category/section/Section'),
        beforeEnter: authGuard
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path === '/') {
        next('/dashboard')
    } else {
        next()
    }
})

export default router
