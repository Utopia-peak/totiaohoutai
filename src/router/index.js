import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '@/components/login/login'
import home from '@/components/home/home'
import layout from '@/components/layout/layout'
import content from '@/components/content/content.vue'

Vue.use(VueRouter)

const routes = [
    {path:'/login',component:login},
    {
      path:'/',component:layout,
      children:[
        {
          path:'',name:'home',component:home
        },
        {
          path:'/content',component:content
        }
      ]
  },
]

const router = new VueRouter({
  routes
})


router.beforeEach((to,from,next) =>{
  const tos =JSON.parse(window.localStorage.getItem('token'))
 if(to.path !=='/login'){
if(tos){
next()
}else{
  next('/login')
}
 }else{
   next()
 }
})

export default router
