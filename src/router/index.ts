import { createWebHistory, createRouter } from 'vue-router'

import mainVue from '../views/main.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
const routes = [
    { path: '/', redirect: '/login' },
    { path: '/main', name: 'main', component: mainVue },
    { path: '/login', name:'login', component: login },
    { path: '/register', name: 'register', component: register }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export  default router