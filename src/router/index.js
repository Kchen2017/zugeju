import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/views/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: HomePage
    },{
      path: '/home',
      name: 'homePage',
      component: HomePage
    }
  ]
})
