import Vue from 'vue'
import VueRouter from 'vue-router'

import sy from '@/components/login/login'


Vue.use(VueRouter)

const routes = [
    {path:'/',component:sy}
]

const router = new VueRouter({
  routes
})

export default router
