import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import BlogHome from '../components/BlogHome.vue'
import GamesHome from '../components/GamesHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogHome
  },
  {
    path: '/games',
    name: 'Games',
    component: GamesHome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
