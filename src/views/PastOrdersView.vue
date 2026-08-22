<template>
  <section class="shell" style="padding-top: 2rem">
    <div class="section-head">
      <h1>{{ t('orders.title') }}</h1>
      <p>{{ t('orders.subtitle') }}</p>
    </div>

    <div v-if="!isAuthenticated" class="panel empty-state">
      <p>{{ t('orders.emptyGuest') }}</p>
      <router-link class="btn btn-primary" to="/account" style="margin-top: 1rem">
        {{ t('account.signIn') }}
      </router-link>
    </div>

    <div v-else-if="!orders.length" class="panel empty-state">
      {{ t('orders.empty') }}
    </div>

    <article v-for="order in orders" :key="order.id" class="order-card">
      <div class="order-card__head">
        <div>
          <strong>{{ t('orders.order') }} #{{ order.id.slice(-6).toUpperCase() }}</strong>
          <div class="muted">{{ t('orders.date') }} · {{ formatDate(order.createdAt) }}</div>
        </div>
        <div style="text-align: end">
          <strong>${{ order.total.toFixed(2) }}</strong>
          <div class="muted">{{ order.items.length }} {{ t('orders.items') }}</div>
        </div>
      </div>
      <div class="order-items">
        <div v-for="item in order.items" :key="item.productId + item.quantity" class="order-item">
          <span>{{ localize(item.name) }} × {{ item.quantity }}</span>
          <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
        </div>
      </div>
      <button class="btn btn-soft" type="button" style="margin-top: 0.9rem" @click="reorder(order.id)">
        {{ t('orders.reorder') }}
      </button>
    </article>
  </section>
</template>

<script>
import { inject, computed } from 'vue'

export default {
  name: 'PastOrdersView',
  setup() {
    const i18n = inject('i18n')
    const store = inject('store')

    function formatDate(iso) {
      try {
        return new Intl.DateTimeFormat(i18n.state.locale, {
          dateStyle: 'medium',
          timeStyle: 'short'
        }).format(new Date(iso))
      } catch {
        return iso
      }
    }

    return {
      t: i18n.t,
      localize: i18n.localize,
      isAuthenticated: computed(() => store.isAuthenticated.value),
      orders: computed(() => store.userOrders.value),
      formatDate,
      reorder: store.reorder
    }
  }
}
</script>
