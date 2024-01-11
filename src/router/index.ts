import { createRouter, createWebHashHistory } from 'vue-router'

import ListOf100Days from '@/views/100days/ListOf100Days.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '100days'
    },
    {
      path: '/100days',
      name: '100days',
      component: () => import('@/views/100days/ListOf100Days.vue')
    },
    {
      path: '/itemOf100days',
      name: 'itemOf100days',
      component: () => import('@/views/100days/ItemOf100Days.vue'),
      children: [
        {
          path: ':001',
          name: '001',
          component: () => import('@/views/100days/Mass.vue')
        },
        // {
        //   path: ':Canvas',
        //   name: 'Canvas',
        //   component: () => import('@/views/100days/Canvas.vue')
        // },
      ]
    }
  ]
})

export default router
