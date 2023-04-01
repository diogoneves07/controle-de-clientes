import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFoundViewVue from '../views/PageNotFoundView.vue'
import ClientDataView from '../views/ClientDataView.vue'

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
      component: () => import('../views/RegisteClientView.vue')
    },
    {
      path: '/dados-do-cliente',
      name: 'dados-do-cliente',
      component: ClientDataView
    },
    {
      path: '/dados-do-cliente',
      name: 'editar-cliente',
      component: () => import('../views/RegisteClientView.vue')
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: () => import('../views/ClientsView.vue')
    },

    {
      path: '/status',
      name: 'status',
      component: () => import('../views/ClientInsertionStatusView.vue')
    },

    {
      path: '/:catchAll(.*)',
      component: PageNotFoundViewVue
    }
  ]
})

export default router
