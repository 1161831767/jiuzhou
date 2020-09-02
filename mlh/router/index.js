import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import personalinf from "../components/personalPage/PersonalInf.vue"
import orderlist from "../components/personalPage/OrderList.vue"
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/personal',
    name: 'Personal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Personal.vue'),
    children:[
			{
				path:"personalinf",
				component:personalinf
			},
      {
				path:"orderlist",
				component:orderlist
			},
		]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
