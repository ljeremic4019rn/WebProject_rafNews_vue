import Vue from 'vue'
import VueRouter from 'vue-router'
import SignInView from "../views/SignInView";
import AddArticleView from "../views/AddArticleView";
import AddUserView from "@/views/AddUserView";
import EditUserView from "@/views/EditUserView";
import CategoryView from "@/views/CategoryView";
import EditCategoryView from "@/views/EditCategoryView";
import NewCategoryView from "@/views/NewCategoryView";
import ArticlesView from "@/views/ArticlesView";
import ArticlesByCategory from "@/views/ArticlesByCategory";
import UsersView from "@/views/UsersView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/signIn',
    name: 'SignInView',
    component: SignInView
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
  },
  {
    path: '/categories',
    name: 'CategoryView',
    component: CategoryView
  },
  {
    path: '/edit-category/:id',
    name: 'EditCategoryView',
    props: true,
    component: EditCategoryView
  },
  {
    path: '/new-category',
    name: 'NewCategoryView',
    component: NewCategoryView
  },
  {
    path: '/articles',
    name: 'ArticlesView',
    component: ArticlesView
  },
  {
    path: '/articlesByCategory/:id',
    name: 'ArticlesByCategory',
    component: ArticlesByCategory
  },
  {
    path: '/users',
    name: 'UsersView',
    component: UsersView
  },
]

const router = new VueRouter({
  routes
})

export default router
