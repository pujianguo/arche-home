import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      name: 'layout',
      component: () => import('@/views/layout/index.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/views/home/index.vue'),
        },
        {
          path: '/developer',
          name: 'Developer',
          component: () => import('@/views/developer/index.vue'),
        },
        {
          path: '/tokenomics',
          name: 'Tokenomics',
          component: () => import('@/views/tokenomics/index.vue'),
        },
        {
          path: '/about',
          name: 'About',
          component: () => import('@/views/about/index.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/other/notFound.vue'),
    },
  ],
})

export default router
