/**
 * Return true if the given `value` is an object with keys.
 * 
 * ```ts
 * isObject([1, 2, 3]);
 * // false
 * 
 * isObject({ a: '1', b: '2', c: '3' });
 * // true
 * ```
 * 
 * @function isObject
 * @param {object} value The value to check.
 * @returns {boolean}
 */
export function isObject(value: any): boolean {
    return typeof value === 'object';
}