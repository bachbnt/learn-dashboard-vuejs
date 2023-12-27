import { CalcUnit } from '@/types/CalcUnit'
import type { ICalc } from '@/types/ICalc'

export const formatCalc = (calc: ICalc) => {
  if (calc.unit === CalcUnit.PERCENT) {
    return calc.value / 100
  }
  return calc.value
}
