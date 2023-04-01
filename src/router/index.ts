import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'
import ClientDataView from '../views/ClientDataView.vue'
import ManualView from '@/views/ManualView.vue'
import RegisteClientView from '../views/RegisteClientView.vue'
import ClientsView from '@/views/ClientsView.vue'
import ClientInsertionStatusView from '../views/ClientInsertionStatusView.vue'

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
      component: ManualView
    },

    {
      path: '/adicionar-cliente',
      name: 'adicionar-cliente',
      component: RegisteClientView
    },
    {
      path: '/dados-do-cliente',
      name: 'dados-do-cliente',
      component: ClientDataView
    },
    {
      path: '/dados-do-cliente',
      name: 'editar-cliente',
      component: RegisteClientView
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: ClientsView
    },

    {
      path: '/status',
      name: 'status',
      component: ClientInsertionStatusView
    },

    {
      path: '/:catchAll(.*)',
      component: PageNotFoundView
    }
  ]
})

export default router
