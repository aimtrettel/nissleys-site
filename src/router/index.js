import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import BlogHome from '../components/BlogHome.vue'
import GamesHome from '../components/GamesHome.vue'
import HangmanMain from '../components/hangman/HangmanMain.vue'
import HangmanGame from '../components/hangman/HangmanGame.vue'

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
    name: 'games',
    component: GamesHome
  },
  {
    path: '/hangman/main',
    name: 'hangmanMain',
    component: HangmanMain
  },
  {
    path: '/hangman/game',
    name: 'hangmanGame',
    component: HangmanGame
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
