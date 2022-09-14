import { createRouter, createWebHistory } from 'vue-router'
import SnailFormView from '../views/SnailFormView.vue'

/**
 * This file sets up the router of the application and allows the 
 * definition of each route That is, what view in the app does each 
 * route lead the user to.
 */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'form',
      component: SnailFormView
    },
    {
      path: '/history',
      name: 'history',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SnailHistoryView.vue')
    }
  ]
})

export default router
