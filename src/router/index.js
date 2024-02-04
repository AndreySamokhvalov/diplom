import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogView from '../views/CatalogView.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogView
    },
  ]


})







// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue')
  // },
//   {
//     path: '/catalog',
//     name: 'catalog',
//     component: CatalogView
//   }
// ]

// const router = new VueRouter({
//   routes
// })

// export default router
