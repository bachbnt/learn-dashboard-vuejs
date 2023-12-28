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
      unit: CalcUnit.CURRENCY,
      title: 'pTitle'
    },
    [CalcSymbol.C]: {
      value: 0,
      symbol: CalcSymbol.C,
      unit: CalcUnit.CURRENCY,
      title: 'cTitle'
    },
    [CalcSymbol.P1]: {
      value: 0,
      symbol: CalcSymbol.P1,
      unit: CalcUnit.CURRENCY,
      title: 'p1Title'
    },
    [CalcSymbol.R1]: {
      value: 0,
      symbol: CalcSymbol.R1,
      unit: CalcUnit.PERCENT,
      title: 'r1Title'
    },
    [CalcSymbol.R2]: {
      value: 0,
      symbol: CalcSymbol.R2,
      unit: CalcUnit.PERCENT,
      title: 'r2Title'
    },
    [CalcSymbol._P]: {
      value: 0,
      symbol: CalcSymbol._P,
      unit: CalcUnit.CURRENCY,
      title: '_pTitle'
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
    const precision = calculation.value[field].unit === CalcUnit.PERCENT ? 2 : 0
    calculation.value[field].value = round(value, precision)
  }

  return {
    calculation,
    result,
    updateCalculation
  }
})
