import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import storybook from '../views/storybook/index.vue'

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
      path: '/testPage',
      name: 'testPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/testPage/index.vue')
    },
    {
      path: '/testPagewww',
      name: 'testPagewww',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/testPagewww/index.vue')
    },
    {
      path: '/storybook',
      name: 'storybook',
      meta: {layout: 'default'},
      component: storybook
    },
  ]
})

export default router
