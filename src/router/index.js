import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from "../views/SignInView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/signIn',
    name: 'SignInView',
    component: SignInView
  },
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  }
]

const router = new VueRouter({
  routes
})

export default router
