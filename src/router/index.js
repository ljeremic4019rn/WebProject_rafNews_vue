import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from "../views/SignInView";
import AddArticle from "../views/AddArticle";

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
  },
  {
    path: '/addArticle',
    name: 'AddArticle',
    component: AddArticle
  }
]

const router = new VueRouter({
  routes
})

export default router
