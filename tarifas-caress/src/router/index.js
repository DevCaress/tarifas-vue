import { createRouter, createWebHistory } from 'vue-router'
import { userStore } from '@/store/user'

const requiereAuth = async (to,from,next) =>{
  const user = userStore() 
  user.loadingSesion = true
  const userData = await user.currentUser()
  if(userData){
    next()
  }else{
    next('/login')
  }
  user.loadingSesion = false
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:[
    {
      path: '/',
      name: 'home',
      component: ()=> import('../views/HomeView.vue'),
      beforeEnter: requiereAuth
    },
  {  
    path: '/settings',
    name: 'settings',
    component: ()=> import('../views/SettingsPerfil.vue'),
    beforeEnter: requiereAuth
  },
  {  
    path: '/login',
    name: 'login',
    component: ()=> import('../views/LoginView.vue'),
   
  },
  {  
    path: '/register',
    name: 'register',
    component: ()=> import('../views/RegisterView.vue'),
    beforeEnter: requiereAuth
   
  }
  ]
})

export default router
