/**
 * Sorts an array of objects or primitive values.
 * 
 * @param arr - The array to be sorted.
 * @param key - The key to sort by (for arrays of objects) or a comparison function.
 * If `key` is a string, it sorts by the property of the object at that key.
 * If `key` is a function, it uses it for sorting logic.
 * @returns A sorted array.
 * 
 * @throws TypeError if `arr` is not an array.
 * 
 * @example
 * sort([3, 1, 2]); // Output: [1, 2, 3]
 * sort([{ age: 25 }, { age: 30 }, { age: 20 }], 'age'); // Output: [{ age: 20 }, { age: 25 }, { age: 30 }]
 */
export function sort<T>(arr: T[], key?: string | ((a: T, b: T) => number)): T[] {
    if(!Array.isArray(arr)) throw new TypeError('utils#array.sort() expects an array.');
    if(arr.length === 0) return [];
    if(typeof key === 'function') return arr.sort(key);
    if(typeof key !== 'string') return arr.sort();
    
    return arr.sort((a, b) => {
        const aValue = a[key as keyof T];
        const bValue = b[key as keyof T];

        if(aValue > bValue) return 1;
        else if(aValue < bValue) return -1;

        return 0;
    })
}
  