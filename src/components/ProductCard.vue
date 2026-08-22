<template>
  <article class="product-card" :style="{ animationDelay: `${(index % 6) * 0.05}s` }">
    <div class="product-card__media">
      <img :src="product.image" :alt="name" loading="lazy" @error="onImgError" />
      <span class="product-card__badge">{{ typeLabel }}</span>
      <button
        class="wish-btn"
        type="button"
        :class="{ active: wished }"
        :aria-label="wished ? t('products.wishlistRemove') : t('products.wishlistAdd')"
        @click="onWish"
      >
        ♥
      </button>
    </div>
    <div class="product-card__body">
      <h3>{{ name }}</h3>
      <div class="product-card__meta">
        <span>★ {{ product.rating.toFixed(1) }}</span>
        <span>{{ t('products.inStock', { n: product.stock }) }}</span>
      </div>
      <p class="product-card__desc">{{ description }}</p>
    </div>
    <div class="product-card__footer">
      <div class="price">${{ product.price.USD.toFixed(2) }}</div>
      <div class="qty-row">
        <input v-model.number="quantity" type="number" min="1" :max="product.stock" />
        <button class="btn btn-primary" type="button" @click="onAdd">
          {{ t('products.add') }}
        </button>
      </div>
    </div>
  </article>
</template>

<script>
import { inject, ref, computed } from 'vue'

export default {
  name: 'ProductCard',
  props: {
    product: { type: Object, required: true },
    index: { type: Number, default: 0 }
  },
  setup(props) {
    const i18n = inject('i18n')
    const store = inject('store')
    const quantity = ref(1)

    const name = computed(() => i18n.localize(props.product.name))
    const description = computed(() => i18n.localize(props.product.description))
    const typeLabel = computed(() => i18n.t(`type.${props.product.type}`))
    const wished = computed(() => store.isWishlisted(props.product.id))

    function onAdd() {
      const ok = store.addToCart(props.product.id, quantity.value)
      if (ok) store.toast(i18n.t('products.added'), 'success')
    }

    function onWish() {
      const added = store.toggleWishlist(props.product.id)
      store.toast(
        added ? i18n.t('products.wishlistRemove') : i18n.t('products.wishlistAdd'),
        'success'
      )
    }

    function onImgError(e) {
      e.target.src = `https://picsum.photos/seed/${props.product.slug}/800/600`
    }

    return {
      t: i18n.t,
      quantity,
      name,
      description,
      typeLabel,
      wished,
      onAdd,
      onWish,
      onImgError
    }
  }
}
</script>
