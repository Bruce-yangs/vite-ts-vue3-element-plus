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
import store from '../store'

const routes: Array<RouteRecordRaw> = [
  {
      path: '/',
      redirect: '/columnInfo'
  },
  {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginRegister.vue'),
      meta: {redirectAlreadyLogin: true}
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
    component: () => import('../views/Home.vue'),
    children: [
     /*  {
        path: '/caseStatistics',
        component: import('views/caseStatisticsManage/caseStatistics.vue')
      }, */
      {
        path: '/column/:id',
        name: 'column',
        component: () => import('../views/ColumnDetail.vue')
      },
      {
        path: '/columnInfo',
        name: 'columnInfo',
        component: () => import('../views/ColumnListInfo.vue')
      },
      {
        path: '/create',
        name: 'create',
        component: () => import('../views/CreatePost.vue'),
        meta: {requiredLogin: true}
      },
    ]
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

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  if(to.meta.requiredLogin  && !store.state.user.isLogin) {
    next({name: 'Login'})/* LoginRegister */
  } 
  else if(to.meta.redirectAlreadyLogin  && store.state.user.isLogin) {
    next({name: 'columnInfo'})/* LoginRegister */
  } else {
    next()
  }
 
})


export default router
