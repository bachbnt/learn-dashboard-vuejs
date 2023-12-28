<template>
  <div class="flex flex-col bg-amber-200">
    <CalcItem
      v-for="item in Object.values(store.calculation)"
      :key="item.symbol"
      :calc="item.symbol === CalcSymbol._P ? store.result : item"
      :title="$t(item.title)"
      @callback="onInput"
      :disabled="item.symbol === CalcSymbol._P"
    />
  </div>
</template>
<script lang="ts">
import { CalcSymbol } from '@/types/CalcSymbol'
import CalcItem from './CalcItem.vue'
import { useCalculationStore } from '@/stores/calculation'
import { CalcUnit } from '@/types/CalcUnit'

export default {
  components: { CalcItem },
  data() {
    return {
      CalcSymbol,
      CalcUnit
    }
  },
  methods: {
    onInput(symbol: CalcSymbol, value: number) {
      this.store.updateCalculation(symbol, value)
    }
  },
  computed: {
    store: () => useCalculationStore()
  }
}
</script>
<style></style>
