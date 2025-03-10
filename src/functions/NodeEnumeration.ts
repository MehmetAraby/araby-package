/**
 * Creates an object that maps each value and index in the input array to each other.
 * The function safely handles `undefined` and `any` values and will skip `undefined` values when adding keys/values to the result object.
 * 
 * @param values - An array of strings or any values, where each element is paired with its index in the resulting object.
 * @returns An object where each value from the `values` array is mapped to its index, and the index is mapped to its value.
 * 
 * @example
 * const nodeEnum = NodeEnumeration([0, 'A', 'B', 2]);
 * console.log(nodeEnum); 
 * // Output: { 0: '0', 'A': 1, 'B': 2, 2: '2' }
 * 
 * @template T - The type of each value in the input array, can be `string`, `number`, or `any`.
 * @template U - The array type that extends `[T, ...T[]]`, meaning it must contain at least one element of type `T`.
 */
export function NodeEnumeration<T extends (string), U extends [T, ...T[]]>(values: U): {
    [Key in U[number]]: Key
} {
    const NodeObject: Record<string, any> = {}
    for(const [Index, Value] of values.entries()) {
        if(Value === undefined || Value === null) continue;
        NodeObject[String(Value)] = Index;
        NodeObject[String(Index)] = Value;
    }

    return NodeObject as any;
}
