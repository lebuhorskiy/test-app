import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import EditUser from '../views/EditUser.vue'
import CreatePermission from '../views/CreatePermission.vue'
Vue.use(VueRouter)
import { checkAccessMiddleware } from './middlewares'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      isAuth: true
    }
  },
  {
    path: '/login',
    name: "login",
    meta: {
      isGuest: true
    },
    component: Login
  },
  {
    path: '/user/edit',
    name: "EditUser",
    meta: {
      isAuth: true
    },
    component: EditUser
  },
  {
    path: '/permission/create',
    name: "permission.create",
    meta: {
      isAuth: true
    },
    component: CreatePermission
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(checkAccessMiddleware)

export default router
