<template>
  <div class="flex flex-row w-full">
    <div class="w-12 h-12 flex justify-center items-center bg-cyan-500 hover:bg-cyan-600">
      <p class="text-white text-center">{{ calc.symbol }}</p>
    </div>
    <div class="w-72 h-12 flex justify-center items-center">
      <p>{{ title }} ({{ calc.unit }})</p>
    </div>
    <div class="w-36 h-12 px-2 py-2 flex justify-center items-center">
      <CalcInput :value="calc.value" :unit="calc.unit" :disabled="disabled" @input="handleInput" />
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { ICalc } from '@/types/ICalc'
import CalcInput from './CalcInput.vue'

export default {
  components: {
    CalcInput
  },
  props: {
    calc: {
      type: Object as PropType<ICalc>,
      required: true
    },
    title: { type: String, required: true },
    disabled: { type: Boolean, default: false }
  },
  methods: {
    handleInput(event: Event) {
      const value = Number((event.target as any).value)
      this.$emit('callback', this.calc.symbol, value)
    }
  }
}
</script>

<style></style>
