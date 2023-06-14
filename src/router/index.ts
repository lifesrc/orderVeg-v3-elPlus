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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/vue3main',
      name: 'vue3main',
      component: () => import('../views/Vue3MainView.vue')
    },
    {
      path: '/compositive',
      name: 'compositive',
      component: () => import('../views/CompositiveView.vue')
    },
    {
      path: '/movie/:id',
      name: 'movie',
      props: true,
      component: () => import('../views/MovieView.vue')
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('../views/PiniaView.vue')
    },
    {
      path: '/elplus',
      name: 'elplus',
      component: () => import('../views/VegMealView.vue')
    },
    {
      path: '/redirect',
      name: 'redirect',
      component: () => import('../views/redirect.vue')
    },
  ]
})

export default router
