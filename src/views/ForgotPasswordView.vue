<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {{ $t('forgotPasswordTitle') }}
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <AuthForm :fields="fields" :button-title="$t('confirm')" @submit-callback="onSubmit" />
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import AuthForm from '@/components/AuthForm.vue'
import { toast } from 'vue3-toastify'

const fields = [{ name: 'email', type: 'email', autocomplete: 'email' }]

export default {
  setup() {
    return { fields }
  },
  components: {
    AuthForm
  },
  props: {},
  methods: {
    onSubmit(email: string) {
      axios
        .post('http://localhost:3000/auth/forgot-password', { email })
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
