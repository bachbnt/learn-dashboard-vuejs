<template>
  <div>
    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">{{ title }}</label>
    <div class="mt-2">
      <input
        v-bind="$attrs"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event?.target as any)?.value)"
        class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    modelValue: {
      type: String
    }
  }
}
</script>
