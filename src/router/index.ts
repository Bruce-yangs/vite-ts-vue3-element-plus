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
  /* {
      path: '/login',
      redirect: '/login'
  }, */
  {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginRegister.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/Index.vue')
    // component: () => import('../views/Home.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/column/:id',
    name: 'column',
    component: () => import('../views/ColumnDetail.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '/404',
    component: () => import('../views/404.vue')
  }
]


/* routes: [
  {
      path: '/',
      redirect: '/login'
  },
  {
      path: '/Login',
      name: 'login',
      component: Login
  },
  {
      path: '/index',
      component: Index,
      children: [
          {
              path:'',
              component:Home
          },
          {
              path:'/home',
              name:'home',
              component:Home
          },
          {
              path:'/infoShow',
              name:'infoShow',
              component:InfoShow
          },
          {
              path:'/dataList',
              name:'dataList',
              component:DataList
          },
          {
              path:'/infoMsg',
              name:'infoMsg',
              component:InfoMsg
          }
      ]
  },
  {
      path: '/register',
      name: 'register',
      component: Register
  },
  {
      path: '*',
      name: '/404',
      component: NoPage
  },
  
] */

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
