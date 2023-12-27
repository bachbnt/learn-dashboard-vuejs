<template>
  <div class="row">
    <p class="symbol">{{ calc.symbol }}</p>
    <p>{{ title }} ({{ calc.unit }})</p>
    <input :value="calc.value" :disabled="disabled" @input="handleInput" />
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { ICalc } from '@/types/ICalc'

export default {
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

<style>
.row {
  display: flex;
  flex-direction: row;
}
.symbol {
  width: 50px;
  height: 50px;
  background-color: red;
  color: white;
  text-align: center;
}
</style>
