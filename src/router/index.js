import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Reading.vue'
// import Reading from '../views/Reading.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sabbath-school',
    name: 'Sabbath-school',
    component: () => import(/* webpackChunkName: "about" */ '../views/sabbathSchool.vue')
  },
  {
    path: '/evening',
    name: 'Evening-reading',
    component: () => import(/* webpackChunkName: "about" */ '../views/EveningReading.vue')
  },
  {
    path: '/bible',
    name: 'Bible',
    component: () => import(/* webpackChunkName: "about" */ '../views/bible.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/Info.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
