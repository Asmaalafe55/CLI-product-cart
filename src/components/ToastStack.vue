<template>
  <div class="toast-stack" aria-live="polite">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      class="toast"
      :class="toast.tone"
    >
      {{ toast.message }}
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'

export default {
  name: 'ToastStack',
  setup() {
    const store = inject('store')
    return {
      toasts: computed(() => store.state.toasts)
    }
  }
}
</script>
