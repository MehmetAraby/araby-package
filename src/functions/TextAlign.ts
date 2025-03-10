import { Longest } from './Longest';
import { RepeatString } from './RepeatString';

/**
 * Aligns lines of text based on the provided function or alignment option.
 * 
 * @param value - The input text (string) or array of strings to align.
 * @param fn - The alignment strategy, which can be:
 *   - A function that calculates padding based on line length.
 *   - A fixed number for consistent indentation.
 *   - An object specifying custom character, indentation, and optional prefix.
 * @returns The aligned text as a string if the input was a string, or as an array if the input was an array.
 * @throws TypeError if the input is not a string or array.
 * 
 * @example
 * // Align text to the right
 * TextAlign('Hello\nWorld', (lineLength, maxLength) => maxLength - lineLength);
 * 
 * // Center align with custom padding
 * TextAlign(['Short', 'Longer'], { character: '.', indent: 4, prefix: '-> ' });
 */
export function TextAlign<Value = any>(value: Value, fn?: ((lineLength: number, maxLength: number, line: string, lines: string[], index: number) => number) | number | { character?: string; indent?: number; prefix?: string; }): Value | undefined {
    
    // Determine the original input type
    const originalType = Array.isArray(value) ? 'array' : typeof value;

    // Convert input to an array of strings if it's a string
    let lines: string[] = [];
    if (originalType === 'string') {
        lines = (value as string).split(/\r\n|\n/);
    } else if (originalType === 'array') {
        lines = value as string[];
    } else {
        throw new TypeError('TextAlign expects a string or array as the first argument.');
    }

    const maxLine = Longest(lines) as string;
    const maxLength = maxLine.length;

    const results: string[] = [];

    lines.forEach((line, index) => {
        let diff: number = 0;

        if (typeof fn === 'function') {
            diff = fn(line.length, maxLength, line, lines, index);
        } else if (typeof fn === 'number') {
            diff = fn;
        } else if (typeof fn === 'object' && fn !== null) {
            const { character = ' ', indent = 0, prefix = '' } = fn;
            results.push(prefix + RepeatString(character, indent) + line);
            return;
        } else {
            diff = maxLength - line.length;
        }

        results.push(RepeatString(' ', diff) + line);
    });

    return originalType === 'array' ? results as Value : (results.join('\n') as Value);
}
