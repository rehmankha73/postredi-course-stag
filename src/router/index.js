import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PcafView from '../views/PcafView.vue'
import SignUp from "../views/auth/signUp";
import ProductsList from "@/views/ProductsList";
import Checkout from "@/views/Checkout";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pcaf',
    name: 'PcafView',
    component: PcafView
  },
  {
    path: '/auth/sign-up',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/products',
    name: 'ProductsList',
    component: ProductsList
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
