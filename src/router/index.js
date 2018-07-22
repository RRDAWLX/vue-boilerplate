import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/test',
    component: () => import('../views/Test/Main')
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router