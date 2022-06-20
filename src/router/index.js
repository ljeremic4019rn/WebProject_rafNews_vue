import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from "../views/SignInView";
import AddArticleView from "../views/AddArticleView";
import AddUserView from "@/views/AddUserView";
import EditUserView from "@/views/EditUserView";

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
    name: 'AddArticleView',
    component: AddArticleView
  },
  {
    path: '/cms_addUser',
    name: 'AddUserView',
    component: AddUserView
  },
  {
    path: '/cms_editUser/:id',
    name: 'EditUserView',
    component: EditUserView
  }
]

const router = new VueRouter({
  routes
})

export default router
