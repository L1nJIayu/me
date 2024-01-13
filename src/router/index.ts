import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'oneHundredTry'
    },
    {
      path: '/oneHundredTry',
      name: 'oneHundredTry',
      component: () => import('@/views/oneHundredTry/oneHundredTry.vue')
    },
    {
      path: '/itemOf100days',
      name: 'itemOf100days',
      component: () => import('@/views/oneHundredTry/ItemOf100Days.vue'),
      children: [
        { path: '001', name: '001', component: () => import('@/views/oneHundredTry/Mass.vue') },
        { path: '002', name: '002', component: () => import('@/views/oneHundredTry/Scope.vue') },
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
