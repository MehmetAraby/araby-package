/**
 * Checks if the given value is a plain JavaScript object.
 * A plain object is an object created by the Object constructor or `{}`.
 * 
 * @param value - The value to be checked.
 * @returns True if the value is a plain object, false otherwise.
 */
export const isObject = (value: object): boolean => Object.prototype.toString.call(value) === '[object Object]';
  
/**
 * Determines if the given value is a plain object.
 * A plain object is an object that is created directly by the Object constructor
 * and doesn't have a modified prototype or constructor.
 * 
 * This function first checks if the value is an object, then it performs further
 * checks to ensure the object doesn't have a modified constructor or prototype,
 * which would indicate that it's not a plain object.
 * 
 * @param value - The value to be checked.
 * @returns True if the value is a plain object, false otherwise.
 */
export function isPlainObject(value: any): boolean {
    if (!isObject(value)) return false;
    if (!value.constructor) return true;
    const { prototype } = value.constructor;

    return isObject(prototype) && prototype.hasOwnProperty('isPrototypeOf');
}
  