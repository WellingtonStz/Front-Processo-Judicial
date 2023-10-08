import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import ProcessoJudicial from '../views/ProcessoJudicial'
import ProcessosRegistrados from '../views/ProcessosRegistrados'
import Home from '@/components/Home'
import ViewHome from '@/components/ViewHome'

const routes = [
  {
    path: '/',
    name: 'ViewHome',
    component: ViewHome

  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cadastrar',
    name: 'Cadastrar',
    component: () => import(/* webpackChunkName: "cadastrar" */ '../views/Cadastrar.vue')
  },
  {
    path: '/processojudicial',
    name: 'ProcessoJudicial',
    component: ProcessoJudicial
  },
  {
    path: '/processosregistrados',
    name: 'ProcessosRegistrados',
    component: ProcessosRegistrados
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
