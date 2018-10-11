import Router from 'vue-router'
import Vue from 'vue'

//Import main route, different routes are lazy-loaded in routes config object below
import Home from './views/Home'

//Routes config
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    }
  ]

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
