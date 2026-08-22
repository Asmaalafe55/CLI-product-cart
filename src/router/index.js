import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import PastOrdersView from '../views/PastOrdersView.vue'
import WishlistView from '../views/WishlistView.vue'
import AccountView from '../views/AccountView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/products', name: 'products', component: ProductsView },
  { path: '/past-orders', name: 'orders', component: PastOrdersView },
  { path: '/wishlist', name: 'wishlist', component: WishlistView },
  { path: '/account', name: 'account', component: AccountView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
