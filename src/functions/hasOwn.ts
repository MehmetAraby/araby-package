/**
 * Returns `true` if the specified `key` is an own, enumerable property of the given `object`.
 * 
 * This method checks whether the provided `key` exists directly on the object itself,
 * not on its prototype chain. It uses `Object.prototype.hasOwnProperty` to ensure the 
 * property is an "own property" of the object and not inherited.
 * 
 * @param object - The object to check for the property.
 * @param key - The property name to test.
 * @returns `true` if the property exists directly on the object, `false` otherwise.
 * 
 * @example
 * const obj = { name: 'Alice', age: 30 };
 * 
 * hasOwn(obj, 'name'); // true
 * hasOwn(obj, 'toString'); // false (inherited from Object prototype)
 * hasOwn(obj, 'address'); // false (property does not exist)
 */
export function hasOwn(object: object, key: string): boolean {
    return Object.prototype.hasOwnProperty.call(object, key);
}