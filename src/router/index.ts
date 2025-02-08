import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/HomePage.vue'
import My from '../components/MyPage.vue'

const router = createRouter({
  history: createWebHashHistory('/sentry-vue/'),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/my',
      component: My,
    },
  ],
})

export default router
