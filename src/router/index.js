import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Tiro from '@/components/Tiro'
import Api from '@/components/Api'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/tiro',
      name: 'Tiro',
      component: Tiro
    },
    {
      path: '/api',
      name: 'Api',
      component: Api
    }
  ]
})
