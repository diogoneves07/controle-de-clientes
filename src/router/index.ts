import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisteClientView from '../views/RegisteClientView.vue'

import ClientsView from '@/views/ClientsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView
    },

    {
      path: '/manual',
      name: 'manual',
      component: () => import('../views/ManualView.vue')
    },

    {
      path: '/adicionar-cliente',
      name: 'adicionar-cliente',
      component: RegisteClientView
    },

    {
      path: '/clientes',
      name: 'clientes',
      component: ClientsView
    }
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/
  ]
})

export default router
