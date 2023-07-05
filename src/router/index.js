import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: ()=>import("../views/home/Home")
  },
  {
    path: '/home',
    name: 'home',
    component: ()=>import("../views/home/Home")
  },
  {
    path: '/category',
    name: 'category',
    component: ()=>import("../views/category/Category")
  },
  {
    path: '/cart',
    name: 'cart',
    component: ()=>import("../views/cart/Cart")
  },
  {
    path: '/profile',
    name: 'profile',
    component: ()=>import("../views/profile/Profile")
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
