<template>
  <section class="shell" style="padding-top: 2rem">
    <div class="section-head">
      <h1>{{ t('products.title') }}</h1>
      <p>{{ t('products.subtitle') }}</p>
    </div>

    <div class="toolbar">
      <input
        v-model="search"
        class="search-field"
        type="search"
        :placeholder="t('products.search')"
      />
      <div class="chip-row">
        <button
          v-for="type in types"
          :key="type"
          type="button"
          class="chip"
          :class="{ active: filter === type }"
          @click="filter = type"
        >
          {{ type === 'all' ? t('products.all') : t(`products.${type}`) }}
        </button>
      </div>
      <select v-model="sort" class="select-field" :aria-label="t('products.sortLabel')">
        <option value="featured">{{ t('products.sortFeatured') }}</option>
        <option value="price-asc">{{ t('products.sortPriceAsc') }}</option>
        <option value="price-desc">{{ t('products.sortPriceDesc') }}</option>
        <option value="rating">{{ t('products.sortRating') }}</option>
      </select>
    </div>

    <div v-if="filtered.length" class="product-grid">
      <ProductCard
        v-for="(product, index) in filtered"
        :key="product.id"
        :product="product"
        :index="index"
      />
    </div>
    <div v-else class="empty-state panel">
      {{ t('products.empty') }}
    </div>
  </section>
</template>

<script>
import { inject, ref, computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'ProductsView',
  components: { ProductCard },
  setup() {
    const i18n = inject('i18n')
    const store = inject('store')
    const search = ref('')
    const filter = ref('all')
    const sort = ref('featured')
    const types = ['all', 'vegetable', 'fruit', 'meat']

    const filtered = computed(() => {
      const q = search.value.trim().toLowerCase()
      let list = store.state.products.filter((p) => {
        if (filter.value !== 'all' && p.type !== filter.value) return false
        if (!q) return true
        const name = i18n.localize(p.name).toLowerCase()
        const desc = i18n.localize(p.description).toLowerCase()
        return name.includes(q) || desc.includes(q) || p.type.includes(q)
      })

      list = [...list]
      if (sort.value === 'price-asc') list.sort((a, b) => a.price.USD - b.price.USD)
      if (sort.value === 'price-desc') list.sort((a, b) => b.price.USD - a.price.USD)
      if (sort.value === 'rating') list.sort((a, b) => b.rating - a.rating)
      if (sort.value === 'featured') list.sort((a, b) => Number(b.featured) - Number(a.featured))
      return list
    })

    return { t: i18n.t, search, filter, sort, types, filtered }
  }
}
</script>
