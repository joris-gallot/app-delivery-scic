import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    meta: {
      requiresNoAuth: true,
    },
    component: Login,
  },
  {
    path: '/register',
    meta: {
      requiresNoAuth: true,
    },
    name: 'register',
    component: Register,
  },
  {
    path: '/home',
    meta: {
      requiresAuth: true,
    },
    name: 'home',
    component: Home,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.isUserLoggedIn) {
      next()
    } else {
      next({
        name: 'login',
      })
    }
  } else if (to.matched.some(record => record.meta.requiresNoAuth)) {
    if (store.state.isUserLoggedIn) {
      next({
        name: 'home',
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
