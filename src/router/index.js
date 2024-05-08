import { createRouter, createWebHistory } from 'vue-router'
import MainShop from '@/pages/MainShop.vue'
import Delivery from '@/pages/Delivery.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainShop',
      component: MainShop
    },
    {
        path: '/delivery',
        name: 'Delivery',
        component: Delivery
      },
  ]
})

export default router
