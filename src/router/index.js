import VueRouter from 'vue-router'

const routes = [
  {
    path: '/test',
    component: () => import('../views/Test/Main')
  }
]

const router = new VueRouter({
  routes
})

export default router