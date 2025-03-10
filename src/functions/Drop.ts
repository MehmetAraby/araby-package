/**
 * Removes elements from the beginning of the array until the specified count.
 * 
 * @param arr - The array to modify.
 * @param count - The number of elements to drop from the start of the array. Defaults to 1.
 * @returns A new array with the first `count` elements removed.
 * 
 * @example
 * drop([1, 2, 3]); // Output: [2, 3]
 * drop([1, 2, 3], 2); // Output: [3]
 */
export function drop<T>(arr: T[], count: number = 1): T[] {
    if(!Array.isArray(arr)) throw new TypeError('Expected an array');
    if(count <= 0) return arr.slice();
    
    return arr.slice(count);
}