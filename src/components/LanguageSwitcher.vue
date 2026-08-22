<template>
  <div class="lang-switch" role="group" :aria-label="t('lang.switcher')">
    <button
      v-for="locale in locales"
      :key="locale.code"
      type="button"
      :class="{ active: current === locale.code }"
      @click="setLocale(locale.code)"
    >
      {{ t(locale.labelKey) }}
    </button>
  </div>
</template>

<script>
import { inject, computed } from 'vue'

export default {
  name: 'LanguageSwitcher',
  setup() {
    const i18n = inject('i18n')
    return {
      t: i18n.t,
      locales: i18n.locales,
      current: computed(() => i18n.state.locale),
      setLocale: i18n.setLocale
    }
  }
}
</script>
