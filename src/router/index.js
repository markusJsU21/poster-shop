import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SingleItem from '../views/SingleItem'
import Basket from '../views/Basket'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/SingleItem/:id',
    name: 'Single Item',
    component: SingleItem
  },
  {
    path:'/Basket/',
    name: 'Basket',
    component: Basket
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
