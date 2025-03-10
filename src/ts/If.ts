/**
 * Define a conditional type that returns different types based on a boolean value.
 */
export type If<Value extends boolean, TrueResult, FalseResult> = Value extends true ? TrueResult : Value extends false ? FalseResult : TrueResult | FalseResult;