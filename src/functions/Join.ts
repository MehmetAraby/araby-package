/**
 * Joins all elements of an array into a string, using the specified separator.
 * 
 * @param array - The array of elements to join.
 * @param separator - The string to separate each element in the resulting string. Defaults to ',' if not provided.
 * @returns A string with all the elements from the array joined by the separator.
 * 
 * @example
 * join(['a', 'b', 'c'], '~');  // Output: 'a~b~c'
 * join([1, 2, 3], '-');        // Output: '1-2-3'
 */
export function join<T>(array: T[], separator: string = ','): string {
    if(!Array.isArray(array)) throw new TypeError('Expected an array as the first argument.');
    
    return array.join(separator);
}
  