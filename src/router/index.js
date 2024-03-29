import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import PortfolioMain from '../components/PortfolioMain.vue'
import BlogMain from '../components/BlogMain.vue'
import ShopMain from '../components/ShopMain.vue'
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
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioMain
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogMain
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopMain
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
