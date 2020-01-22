import Vue from 'vue'
import Router from 'vue-router'
// import routes from './routes'
import Category from '@/views/Category'
import Master from '@/views/Master'
import Home from '@/views/Home'
import Application from '@/views/Application'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Jungo',
      name: 'master',
      component: Master,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: 'category',
          name: 'category',
          component: Category
        },
        {
          path: 'application',
          name: 'application',
          component: Application
        }
      ]
    }
  ]
})

export default router
