/**
 * Returns the index of the first occurrence of `value` in the array `array`, starting from the given index `start`.
 * If the element is not found, it returns `-1`.
 * 
 * @param array - The array to search through.
 * @param value - The element to find.
 * @param start - The index to start searching from. Defaults to 0.
 * @returns The index of the element if found, otherwise `-1`.
 * 
 * @throws TypeError if `array` is not an array.
 * 
 * @example
 * indexOf([1, 2, 3], 2); // Output: 1
 * indexOf([1, 2, 3], 4); // Output: -1
 * indexOf([1, 2, 3], 3, 2); // Output: 2
 */
export function indexOf<T>(array: T[], value: T, start: number = 0): number {
    if(!Array.isArray(array)) throw new TypeError('Expected the first argument to be an array.');
    if(typeof value === 'undefined') return -1;
    const ArrLength = array.length;
    let Index = start < 0 ? length + start : start;
    while(Index < ArrLength) {
        if(array[Index] === value) return Index;
        Index++;
    }

    return -1;
}