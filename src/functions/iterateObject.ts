/**
 * Iterates over the properties of an object and invokes the given function for each property.
 * 
 * @param obj - The object to iterate over.
 * @param fn - The function to call for each property, receiving the value, key, and the object itself.
 * @param thisArg - The value to use as `this` when calling `fn`.
 * @returns `undefined` (no return value).
 * 
 * The iteration stops when the function returns `false`.
 */
export function iterateObject<Value>(object: Record<string, Value>, fn: (value: Value, key: Value, object: Record<string, Value>) => boolean | void, thisArg?: any) {
    for(const key in object) {
        if(fn.call(thisArg, object[key], key as Value, object) === false) break;
    }
}