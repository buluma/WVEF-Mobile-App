import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/wob-list',
      name: 'wob-list',
      component: () => import('../views/WOBListView.vue')
    },
    {
      path: '/buyers-list',
      name: 'buyers-list',
      component: () => import('../views/BuyersListView.vue')
    },
    {
      path: '/partners',
      name: 'partners',
      component: () => import('../views/PartnersView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

export default router