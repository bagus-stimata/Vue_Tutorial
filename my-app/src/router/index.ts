import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

// otamatis di load saat aplikasi di jalankan -> Jadi gunakan opsi yang dibawah
// import MyNewPage from '../views/MyNewPage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/mynewpage',
    name: 'MyNewPage',
    // component: MyNewPage
    component: () => import(/* webpackChunkName: "about" */ '../views/MyNewPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
