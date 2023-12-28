<template>
  <div>
    <div class="relative rounded-md shadow-sm">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span class="text-gray-500 sm:text-sm">{{ unit }}</span>
      </div>
      <input
        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        v-bind="$attrs"
      />
    </div>
  </div>
</template>

<script lang="ts">
import type { CalcUnit } from '@/types/CalcUnit'
import type { PropType } from 'vue'

export default {
  props: {
    unit: {
      type: String as PropType<CalcUnit>,
      required: true
    }
  }
}
</script>
