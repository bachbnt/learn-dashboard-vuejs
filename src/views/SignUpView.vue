<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {{ $t('signUpTitle') }}
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <AuthForm :fields="fields" :button-title="$t('signUp')" @submit-callback="onSubmit">
        <template v-slot:above-button>
          <p class="mt-4 text-center text-sm text-gray-500">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:indigo-500 dark:focus:indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            {{ $t('signUpSubtitle') }}
            <RouterLink
              :to="'/'"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >{{ $t('termOfService') }}
            </RouterLink>
            {{ $t('and') }}
            <RouterLink
              :to="'/'"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >{{ $t('privacyPolicy') }}
            </RouterLink>
          </p>
        </template>
      </AuthForm>
    </div>
  </div>
</template>

<script lang="ts">
import AuthForm from '@/components/AuthForm.vue'
import { useAuthStore } from '@/stores/auth'
import { RouterLink } from 'vue-router'

const fields = [
  { name: 'email', type: 'email', autocomplete: 'email' },
  { name: 'password', type: 'password', autocomplete: 'current-password' },
  { name: 'fullName', type: 'text', autocomplete: 'name' }
]

export default {
  setup() {
    return { fields }
  },
  components: {
    AuthForm,
    RouterLink
  },
  methods: {
    onSubmit(fieldModels: any) {
      const { email, password, fullName } = fieldModels
      this.store.signUp(email?.value, password?.value, fullName?.value)
    }
  },
  computed: {
    store: () => useAuthStore()
  }
}
</script>

<style></style>
