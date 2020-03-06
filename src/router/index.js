import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/views/Category'
import Application from '@/views/Application'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'home',
      component: Category
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/application',
      name: 'application',
      component: Application
    }
  ]
})

export default router
