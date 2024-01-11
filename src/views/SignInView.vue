<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="http://localhost:5173/logo_vue.png" alt="logo" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {{ $t('signInTitle') }}
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <AuthForm :fields="fields" :button-title="$t('signIn')" @submit-callback="onSubmit">
        <template v-slot:above-button>
          <div class="text-sm mt-3 flex justify-end">
            <RouterLink
              :to="'/forgot-password'"
              class="font-semibold text-indigo-600 hover:text-indigo-500"
              >{{ $t('forgotPassword') }}
            </RouterLink>
          </div>
        </template>
        <template v-slot:below-button>
          <p class="mt-4 text-center text-sm text-gray-500">
            {{ $t('signInSubtitle') }}
            <RouterLink
              :to="'/sign-up'"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >{{ $t('signUp') }}
            </RouterLink>
          </p>
        </template>
      </AuthForm>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import AuthForm from '@/components/AuthForm.vue'
import { toast } from 'vue3-toastify'
import { RouterLink } from 'vue-router'

const fields = [
  { name: 'email', type: 'email', autocomplete: 'email' },
  { name: 'password', type: 'password', autocomplete: 'current-password' }
]

export default {
  setup() {
    return { fields }
  },
  components: {
    AuthForm,
    RouterLink
  },
  props: {},
  methods: {
    onSubmit(email: string, password: string) {
      axios
        .post('http://localhost:3000/auth/login', { email, password })
        .then((res) => {
          toast.success(res.statusText)
          console.log(res)
        })
        .catch((err) => {
          toast.error(err.message)
        })
    }
  }
}
</script>

<style></style>
