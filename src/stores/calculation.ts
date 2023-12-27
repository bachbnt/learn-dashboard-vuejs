import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { CalcSymbol } from '@/types/CalcSymbol'
import { CalcUnit } from '@/types/CalcUnit'
import { formatCalc } from '@/utils/calcUtil'
import round from 'lodash/round'

export const useCalculationStore = defineStore('calculation', () => {
  const calculation = ref({
    [CalcSymbol.P]: {
      value: 0,
      symbol: CalcSymbol.P,
      unit: CalcUnit.CURRENCY
    },
    [CalcSymbol.C]: {
      value: 0,
      symbol: CalcSymbol.C,
      unit: CalcUnit.CURRENCY
    },
    [CalcSymbol.P1]: {
      value: 0,
      symbol: CalcSymbol.P1,
      unit: CalcUnit.CURRENCY
    },
    [CalcSymbol.R1]: {
      value: 0,
      symbol: CalcSymbol.R1,
      unit: CalcUnit.PERCENT
    },
    [CalcSymbol.R2]: {
      value: 0,
      symbol: CalcSymbol.R2,
      unit: CalcUnit.PERCENT
    },
    [CalcSymbol._P]: {
      value: 0,
      symbol: CalcSymbol._P,
      unit: CalcUnit.CURRENCY
    }
  })

  const result = computed(() => {
    const raw =
      (formatCalc(calculation.value[CalcSymbol.P]) -
        formatCalc(calculation.value[CalcSymbol.C]) +
        formatCalc(calculation.value[CalcSymbol.P1]) *
          formatCalc(calculation.value[CalcSymbol.R1]) +
        formatCalc(calculation.value[CalcSymbol.R2])) /
      (1 +
        formatCalc(calculation.value[CalcSymbol.R1]) +
        formatCalc(calculation.value[CalcSymbol.R2]))
    calculation.value[CalcSymbol._P].value = round(raw)
    return calculation.value[CalcSymbol._P]
  })

  const updateCalculation = (field: CalcSymbol, value: number) => {
    calculation.value[field].value = round(value)
  }

  return {
    calculation,
    result,
    updateCalculation
  }
})
