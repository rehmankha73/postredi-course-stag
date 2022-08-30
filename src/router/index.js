import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PcafView from '../views/PcafView.vue'
import SignUp from "../views/auth/signUp";

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
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
