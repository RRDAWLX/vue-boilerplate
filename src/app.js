import Vue from 'vue'
import App from './App'
// import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'

const dev = (process.env.NODE_ENV !== 'production' ? true : false)

// sync(store, router)

const app = new Vue({
  router,
  store,
  render: h => h(App)
})

if (dev) {
  console.log(app)
}

app.$mount('#app')