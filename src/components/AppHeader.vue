<template>
  <header class="app-header">
    <div class="app-header__inner">
      <router-link to="/" class="brand">
        <i class="icofont-spoon-and-fork"></i>
        <span>{{ t('brand') }}</span>
      </router-link>

      <nav class="nav-links" aria-label="Primary">
        <router-link to="/">{{ t('nav.home') }}</router-link>
        <router-link to="/products">{{ t('nav.products') }}</router-link>
        <router-link to="/wishlist">{{ t('nav.wishlist') }}</router-link>
        <router-link to="/past-orders">{{ t('nav.orders') }}</router-link>
        <router-link to="/account">{{ t('nav.account') }}</router-link>
      </nav>

      <div class="header-actions">
        <LanguageSwitcher />
        <button class="cart-chip" type="button" @click="openCart">
          <i class="icofont-cart-alt"></i>
          <span class="label">{{ t('nav.cart') }}</span>
          <span class="cart-chip__count">{{ cartCount }}</span>
        </button>
        <button class="menu-toggle" type="button" :aria-expanded="menuOpen ? 'true' : 'false'" @click="menuOpen = !menuOpen">
          <span class="sr-only">Menu</span>
          ☰
        </button>
      </div>
    </div>

    <nav class="mobile-nav" :class="{ open: menuOpen }" @click="menuOpen = false">
      <router-link to="/">{{ t('nav.home') }}</router-link>
      <router-link to="/products">{{ t('nav.products') }}</router-link>
      <router-link to="/wishlist">{{ t('nav.wishlist') }}</router-link>
      <router-link to="/past-orders">{{ t('nav.orders') }}</router-link>
      <router-link to="/account">{{ t('nav.account') }}</router-link>
    </nav>
  </header>
</template>

<script>
import { inject, ref, computed } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

export default {
  name: 'AppHeader',
  components: { LanguageSwitcher },
  setup() {
    const i18n = inject('i18n')
    const store = inject('store')
    const menuOpen = ref(false)

    return {
      menuOpen,
      t: i18n.t,
      cartCount: computed(() => store.cartCount.value),
      openCart() {
        store.state.showCart = true
      }
    }
  }
}
</script>
