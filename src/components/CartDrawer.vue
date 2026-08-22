<template>
  <teleport to="body">
    <div v-if="open" class="cart-backdrop" @click="close"></div>
    <aside v-if="open" class="cart-drawer" role="dialog" aria-modal="true">
      <div class="cart-drawer__head">
        <h2>{{ t('cart.title') }}</h2>
        <button class="btn btn-soft btn-icon" type="button" @click="close">×</button>
      </div>

      <div class="cart-drawer__body">
        <div v-if="!lines.length" class="empty-state">
          <p>{{ t('cart.empty') }}</p>
        </div>

        <div v-for="line in lines" :key="line.id" class="cart-line">
          <img :src="line.product.image" :alt="line.name" />
          <div>
            <h4>{{ line.name }}</h4>
            <div class="muted">${{ line.product.price.USD.toFixed(2) }} · {{ t('cart.qty') }}</div>
            <div class="qty-row" style="margin-top: 0.35rem">
              <input
                type="number"
                min="1"
                :max="line.product.stock"
                :value="line.quantity"
                @change="onQty(line.id, $event.target.value)"
              />
            </div>
          </div>
          <div>
            <strong>${{ (line.product.price.USD * line.quantity).toFixed(2) }}</strong>
            <div>
              <button class="btn btn-soft" type="button" style="margin-top: 0.4rem; padding: 0.35rem 0.7rem" @click="remove(line.id)">
                {{ t('cart.remove') }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="cart-drawer__foot">
        <div>
          <div class="muted">{{ t('cart.total') }}</div>
          <strong style="font-size: 1.35rem">${{ total.toFixed(2) }}</strong>
        </div>
        <button class="btn btn-primary" type="button" :disabled="!lines.length" @click="checkout">
          {{ t('cart.checkout') }}
        </button>
      </div>
    </aside>
  </teleport>
</template>

<script>
import { inject, computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'CartDrawer',
  setup() {
    const i18n = inject('i18n')
    const store = inject('store')
    const router = useRouter()

    const open = computed(() => store.state.showCart)
    const total = computed(() => store.cartTotal.value)

    const lines = computed(() =>
      Object.entries(store.cart.value)
        .map(([id, quantity]) => {
          const product = store.getProduct(Number(id))
          if (!product) return null
          return {
            id: Number(id),
            quantity,
            product,
            name: i18n.localize(product.name)
          }
        })
        .filter(Boolean)
    )

    function close() {
      store.state.showCart = false
    }

    function remove(id) {
      store.removeFromCart(id)
    }

    function onQty(id, value) {
      store.setCartQty(id, value)
    }

    function checkout() {
      if (!store.isAuthenticated.value) {
        store.toast(i18n.t('cart.needAuth'), 'warn')
        close()
        router.push('/account')
        return
      }
      const result = store.checkout()
      if (result.ok) {
        store.toast(i18n.t('cart.success'), 'success')
        router.push('/past-orders')
      }
    }

    return {
      t: i18n.t,
      open,
      lines,
      total,
      close,
      remove,
      onQty,
      checkout
    }
  }
}
</script>
