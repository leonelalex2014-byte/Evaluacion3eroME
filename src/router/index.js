import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../Inicio.vue'
import Listado from '../Listado.vue'
import Genero from '../Genero.vue'
import Libro from '../Libro.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
  },
  {
    path: '/listado',
    name: 'Listado',
    component: Listado,
  },
  {
    path: '/genero/:nombreGenero',
    name: 'Genero',
    component: Genero,
    props: true,
  },
  {
    path: '/libro/:isbn',
    name: 'Libro',
    component: Libro,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
