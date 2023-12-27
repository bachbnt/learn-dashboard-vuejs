import type { CalcSymbol } from './CalcSymbol'
import type { CalcUnit } from './CalcUnit'

export type ICalc = {
  value: number
  symbol: CalcSymbol
  unit: CalcUnit
}
