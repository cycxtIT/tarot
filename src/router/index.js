import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Mod from '@/components/cardMod'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/mod',
      name: 'Mod',
      component: Mod
    },
  ]
})
