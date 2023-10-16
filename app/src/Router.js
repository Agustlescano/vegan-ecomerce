import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {  path: '/home', component: HomePage}
  ]
})

export default router