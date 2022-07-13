import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component:  () => import('../views/register/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component:  () => import('../views/login/Login.vue')
  },
  {
    path: '/article',
    name: 'WriteArticle',
    component:  () => import('../views/article/WriteArticle.vue')
  },
  {
    path: '/articlelist',
    name: 'ArticleList',
    component:  () => import('../views/article/ArticleList.vue')
  },
  {
    path: '/articleinfo',
    name: 'ArticleInfo',
    component:  () => import('../views/article/ArticleInfo.vue')
  },
  {
    path: '/articlepubinfo',
    name: 'ArticlePubInfo',
    component:  () => import('../views/article/ArticlePubInfo.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
