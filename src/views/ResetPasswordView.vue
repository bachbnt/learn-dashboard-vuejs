<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {{ $t('resetPasswordTitle') }}
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <AuthForm :fields="fields" :button-title="$t('confirm')" @submit-callback="onSubmit" />
    </div>
  </div>
</template>

<script lang="ts">
import AuthForm from '@/components/AuthForm.vue'
import { useAuthStore } from '@/stores/auth'

const fields = [
  { name: 'password', type: 'password', autocomplete: 'current-password' },
  { name: 'rePassword', type: 'password' }
]

export default {
  setup() {
    return { fields }
  },
  components: {
    AuthForm
  },
  methods: {
    onSubmit(fieldModels: any) {
      const { password, rePassword } = fieldModels
      if (password?.value !== rePassword?.value) {
        return
      }
      const token = this.$route.query.token as string
      this.store.resetPassword(token, password?.value)
    }
  },
  computed: {
    store: () => useAuthStore()
  }
}
</script>

<style></style>
