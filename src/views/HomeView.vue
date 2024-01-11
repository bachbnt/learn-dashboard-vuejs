<template>
  <div>
    <h1>This is the main page</h1>
  </div>
</template>

<script lang="ts">
import { useAuthStore } from '@/stores/auth'
import { RoutePath } from '@/router/route'

export default {
  mounted() {
    if (!this.store.checkAuth()) {
      this.$router.push(RoutePath.SIGN_IN)
    }
  },
  computed: {
    store: () => useAuthStore()
  }
}
</script>
<style></style>
