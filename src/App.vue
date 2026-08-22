<template>
  <div class="app-root">
    <AppHeader />
    <main class="page">
      <router-view />
    </main>
    <AppFooter />
    <CartDrawer />
    <ToastStack />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import CartDrawer from './components/CartDrawer.vue'
import ToastStack from './components/ToastStack.vue'

export default {
  name: 'AppRoot',
  components: { AppHeader, AppFooter, CartDrawer, ToastStack }
}
</script>
