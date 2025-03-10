import { ArrayFlatten } from './ArrayFlatten';

/**
 * Calculates the sum of all numeric values in the given arguments.
 * The arguments can be a mix of numbers and nested arrays. Non-numeric values are ignored.
 * 
 * @param arr - The values to be summed. This can include numbers and nested arrays.
 * @returns The sum of all numeric values.
 */
export function Sum(...arr: any[]): number {
    const FlattenedArgs = ArrayFlatten([].concat(...arr));
    let Result: number = 0;
    for(let i = 0; i < FlattenedArgs.length; i++) {
        if(typeof FlattenedArgs[i] === 'number') Result += +FlattenedArgs[i];
    }

    return Result;
}