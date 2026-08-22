<template>
  <section class="shell" style="padding-top: 2rem">
    <div class="section-head">
      <h1>{{ t('account.title') }}</h1>
    </div>

    <div v-if="user" class="panel" style="max-width: 560px">
      <h2 style="margin-top: 0; font-family: var(--font-display)">
        {{ t('account.welcome', { name: user.name }) }}
      </h2>
      <p class="muted">{{ user.email }}</p>

      <div class="stats">
        <div class="stat">
          <strong>{{ ordersCount }}</strong>
          <span>{{ t('account.statsOrders') }}</span>
        </div>
        <div class="stat">
          <strong>{{ wishlistCount }}</strong>
          <span>{{ t('account.statsWishlist') }}</span>
        </div>
        <div class="stat">
          <strong>{{ cartCount }}</strong>
          <span>{{ t('account.statsCart') }}</span>
        </div>
      </div>

      <button class="btn btn-dark" type="button" @click="onSignOut">
        {{ t('account.signOut') }}
      </button>
    </div>

    <div v-else class="panel" style="max-width: 480px">
      <p class="muted" style="margin-top: 0">{{ t('account.guest') }}</p>

      <form class="form-grid" @submit.prevent="onSubmit">
        <label v-if="mode === 'signup'">
          {{ t('account.name') }}
          <input v-model="form.name" type="text" required autocomplete="name" />
        </label>
        <label>
          {{ t('account.email') }}
          <input v-model="form.email" type="email" required autocomplete="email" />
        </label>
        <label>
          {{ t('account.password') }}
          <input v-model="form.password" type="password" required minlength="4" autocomplete="current-password" />
        </label>

        <button class="btn btn-primary" type="submit">
          {{ mode === 'signup' ? t('account.signUp') : t('account.signIn') }}
        </button>
      </form>

      <button class="btn btn-soft" type="button" style="margin-top: 0.85rem; width: 100%" @click="toggleMode">
        {{ mode === 'signup' ? t('account.switchToSignIn') : t('account.switchToSignUp') }}
      </button>
      <p class="muted" style="margin-bottom: 0">{{ t('account.hint') }}</p>
    </div>
  </section>
</template>

<script>
import { inject, reactive, ref, computed } from 'vue'

export default {
  name: 'AccountView',
  setup() {
    const i18n = inject('i18n')
    const store = inject('store')
    const mode = ref('signin')
    const form = reactive({ name: '', email: '', password: '' })

    function toggleMode() {
      mode.value = mode.value === 'signin' ? 'signup' : 'signin'
    }

    function onSubmit() {
      if (mode.value === 'signup') {
        const result = store.register(form)
        if (!result.ok) {
          store.toast(i18n.t(`auth.${result.error}`), 'warn')
          return
        }
        store.toast(i18n.t('auth.created'), 'success')
        return
      }
      const result = store.signIn(form)
      if (!result.ok) {
        store.toast(i18n.t(`auth.${result.error}`), 'warn')
        return
      }
      store.toast(i18n.t('auth.welcomeBack'), 'success')
    }

    function onSignOut() {
      store.signOut()
      store.toast(i18n.t('auth.signedOut'), 'info')
    }

    return {
      t: i18n.t,
      mode,
      form,
      toggleMode,
      onSubmit,
      onSignOut,
      user: computed(() => store.currentUser.value),
      ordersCount: computed(() => store.userOrders.value.length),
      wishlistCount: computed(() => store.wishlist.value.length),
      cartCount: computed(() => store.cartCount.value)
    }
  }
}
</script>
