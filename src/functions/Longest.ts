/**
 * Finds the element with the longest string length in an array.
 * 
 * @param array - The array to search through.
 * @returns The element with the longest string representation, or undefined if the array is empty.
 * @throws TypeError if the input is not an array.
 */
export function Longest<Value = any>(array: Array<Value>): Value | undefined {
    if (!Array.isArray(array)) throw new TypeError('Invalid input: Expected an array as the first argument.');
    if (array.length === 0) return undefined;

    let LongestValue = array[0];
    let LongestLength = String(LongestValue).length;

    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        if (current == null) continue;

        const currentLength = String(current).length;
        if (currentLength > LongestLength) {
            LongestLength = currentLength;
            LongestValue = current;
        }
    }

    return LongestValue;
}
