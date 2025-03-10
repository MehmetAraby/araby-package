/**
 * Returns the last element of an array.
 * 
 * @param array - The array from which to extract the last element.
 * @returns The last element of the array, or `undefined` if the array is empty.
 * 
 * @example
 * last([1, 2, 3]);  // Output: 3
 * last([10, 20, 30]); // Output: 30
 * last([]); // Output: undefined
 */
export function last<T>(array: T[]): T | undefined {
    if(!Array.isArray(array)) throw new TypeError('Expected an array as the first argument.');
    
    return array[array.length - 1];
}
  