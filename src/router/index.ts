/* import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('../views/Index.vue') }
    // { path: '/', component: () => import('views/home.vue') }
  ]
});

export default router */


import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
    name: 'login',
    component: () => import('../views/LoginRegister.vue')
    // component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginRegister.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '/404',
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
