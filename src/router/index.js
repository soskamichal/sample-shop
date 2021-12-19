import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EmptyState from '../views/EmptyState.vue'
import ProductView from '../views/ProductView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Home',
        component: EmptyState
      },
      {
        path: '/category/:category',
        component: ProductView
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
