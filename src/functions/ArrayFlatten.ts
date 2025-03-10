/**
 * Flattens a nested array into a single array.
 * This function recursively flattens any nested arrays within the input array.
 * 
 * @param arr - The array to be flattened, which can contain nested arrays.
 * @returns A new flattened array containing all the elements from the nested arrays.
 */
export function ArrayFlatten<R>(arr: R[]): R[] {
    const result: R | any[] = [];
  
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
  
        if (Array.isArray(current)) {
            result.push(...ArrayFlatten(current as any));
        } else {
            result.push(current); 
        }
    }
  
    return result;
}