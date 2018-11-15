

import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/Navbar'
import Register from '@/components/Register'
import Login from '@/components/Login'
import ChangePassword from '@/components/ChangePassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/change',
      name: 'ChangePassword',
      component: ChangePassword
    },
  ]
})