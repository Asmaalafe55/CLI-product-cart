<template>
  <footer class="app-footer">
    <div class="app-footer__inner">
      <div>
        <strong>{{ t('brand') }}</strong>
        <p>{{ t('footer.copy') }}</p>
      </div>
      <p>{{ t('footer.rights') }}</p>
    </div>
  </footer>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'AppFooter',
  setup() {
    const i18n = inject('i18n')
    return { t: i18n.t }
  }
}
</script>
