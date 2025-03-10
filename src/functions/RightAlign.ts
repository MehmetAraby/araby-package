import { TextAlign } from './TextAlign';

/**
 * Aligns text or an array of strings to the right.
 * 
 * @param value - The input text or array of strings to align to the right.
 * @returns The right-aligned text as a string or an array, matching the input type.
 */
export function RightAlign<Value = any>(value: Value): Value | undefined {
    return TextAlign(value, (lineLength, maxLength) => maxLength - lineLength);
}