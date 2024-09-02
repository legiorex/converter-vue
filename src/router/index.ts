import { createWebHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue'
import Convert from '../pages/Convert.vue'

const routes = [
  { path: '/',
    component: Home,
    name: 'Home',
  },
  { path: '/convert',
    component: Convert,
    name: 'Convert',
   },
]

export const router = createRouter({
  history: createWebHistory (),
  routes,
})
