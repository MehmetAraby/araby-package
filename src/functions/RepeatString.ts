/**
 * Repeats a given string a specified number of times.
 * 
 * @param text - The string to repeat.
 * @param count - The number of times to repeat the string.
 * @returns The repeated string.
 * @throws TypeError if the input text is not a string or count is not a valid number.
 */
export function RepeatString(text: string, count: number): string {
    if (typeof text !== 'string') throw new TypeError('Invalid input: Expected a string as the first argument.');
    if (typeof count !== 'number' || count < 0 || !Number.isInteger(count)) throw new TypeError('Invalid input: Expected a non-negative integer as the repeat count.');

    let result = '';
    let str = text;

    while (count > 1) {
        if(count & 1) result += str;
        count >>= 1; 
        str += str;
    }

    return result + str;
}
