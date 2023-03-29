import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BottomNavigation from '../components/TheBottomNavigation.vue'
import RegisteClientView from '../views/RegisteClientView.vue'
import HelpView from '@/views/HelpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView
    },

    {
      path: '/ajuda',
      name: 'ajuda',
      component: HelpView
    },

    {
      path: '/adicionar-cliente',
      name: 'adicionar-cliente',
      component: RegisteClientView
    },

    {
      path: '/counter',
      name: 'diogo',
      component: BottomNavigation
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
