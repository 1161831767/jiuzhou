import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
// import classfi   from '../components/classfi.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
    // children:[{
    //   path:'classfi',
    //   component:classfi,
    // }
    // ]
  },  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
