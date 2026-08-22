<template>
  <div>
    <section class="hero">
      <div class="hero__content">
        <h1 class="hero__brand">{{ t('brand') }}</h1>
        <p class="hero__tagline">{{ t('tagline') }}</p>
        <div class="hero__actions">
          <router-link class="btn btn-primary" to="/products">{{ t('hero.ctaShop') }}</router-link>
          <router-link class="btn btn-ghost" to="/past-orders">{{ t('hero.ctaOrders') }}</router-link>
        </div>
      </div>
    </section>

    <section class="shell" style="padding-top: 3rem">
      <div class="section-head">
        <h2>{{ t('home.recommended') }}</h2>
        <p>{{ t('home.recommendedSub') }}</p>
      </div>
      <div class="product-grid">
        <ProductCard
          v-for="(product, index) in featured"
          :key="product.id"
          :product="product"
          :index="index"
        />
      </div>
    </section>

    <section class="shell" style="padding-top: 3.5rem">
      <div class="section-head">
        <h2>{{ t('home.whyTitle') }}</h2>
      </div>
      <div class="why-grid">
        <article class="why-card" style="animation-delay: 0.05s">
          <h3>{{ t('home.whyFresh') }}</h3>
          <p>{{ t('home.whyFreshSub') }}</p>
        </article>
        <article class="why-card" style="animation-delay: 0.12s">
          <h3>{{ t('home.whyFast') }}</h3>
          <p>{{ t('home.whyFastSub') }}</p>
        </article>
        <article class="why-card" style="animation-delay: 0.2s">
          <h3>{{ t('home.whyLang') }}</h3>
          <p>{{ t('home.whyLangSub') }}</p>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'HomeView',
  components: { ProductCard },
  setup() {
    const i18n = inject('i18n')
    const store = inject('store')
    const featured = computed(() =>
      store.state.products.filter((p) => p.featured).slice(0, 6)
    )
    return { t: i18n.t, featured }
  }
}
</script>
