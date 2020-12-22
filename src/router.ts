import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../src/components/Home.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../src/components/login.vue')
        },
    ]
})