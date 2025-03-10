/**
 * Removes elements from the end of the array until the specified count.
 * 
 * @param arr - The array to modify.
 * @param count - The number of elements to drop from the end of the array. Defaults to 1.
 * @returns A new array with the last `count` elements removed.
 * 
 * @example
 * dropRight([1, 2, 3]); // Output: [1, 2]
 * dropRight([1, 2, 3], 2); // Output: [1]
 */
export function dropRight<T>(arr: T[], count: number = 1): T[] {
    if(!Array.isArray(arr)) throw new TypeError('Expected an array');
    if(count <= 0) return arr.slice();
    
    return arr.slice(0, arr.length - count);
}