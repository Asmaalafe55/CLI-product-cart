<template>
  <section class="shell" style="padding-top: 2rem">
    <div class="section-head">
      <h1>{{ t('wishlist.title') }}</h1>
      <p>{{ t('wishlist.subtitle') }}</p>
    </div>

    <div v-if="!items.length" class="panel empty-state">
      {{ t('wishlist.empty') }}
    </div>

    <div v-else class="product-grid">
      <ProductCard
        v-for="(product, index) in items"
        :key="product.id"
        :product="product"
        :index="index"
      />
    </div>
  </section>
</template>

<script>
import { inject, computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'WishlistView',
  components: { ProductCard },
  setup() {
    const i18n = inject('i18n')
    const store = inject('store')
    const items = computed(() =>
      store.wishlist.value
        .map((id) => store.getProduct(id))
        .filter(Boolean)
    )
    return {
      t: i18n.t,
      items
    }
  }
}
</script>
