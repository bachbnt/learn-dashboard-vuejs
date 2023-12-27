<template>
  <div class="container">
    <CalcItem :calc="store.calculation[CalcSymbol.P]" :title="$t('pTitle')" @callback="onInput" />
    <CalcItem :calc="store.calculation[CalcSymbol.C]" :title="$t('cTitle')" @callback="onInput" />
    <CalcItem :calc="store.calculation[CalcSymbol.P1]" :title="$t('p1Title')" @callback="onInput" />
    <CalcItem :calc="store.calculation[CalcSymbol.R1]" :title="$t('r1Title')" @callback="onInput" />
    <CalcItem :calc="store.calculation[CalcSymbol.R2]" :title="$t('r2Title')" @callback="onInput" />
    <CalcItem :calc="store.result" :title="$t('_pTitle')" disabled />
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
<style>
.container {
  display: flex;
  flex-direction: column;
}
</style>
