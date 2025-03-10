// Type definition for valid hex color codes (e.g., #FF5733)
export type ColorString = `#${string}`;

// Type for RGB color representation, an array of 3 numbers: [Red, Green, Blue]
export type RGB = [number, number, number];

/**
 * Generates a random color in hex format.
 * It's like pulling a color out of a hat—totally random!
 * 
 * @returns A random hex color code (e.g., "#1a2b3c").
 * @example
 * GenerateColor(); // Output: "#a1c4f2"
 */
export function GenerateColor(): ColorString {
    return `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')}` as ColorString;
}

/**
 * Converts an RGB color array into a hex color string.
 * This function gives RGB colors their stylish hex makeover!
 * 
 * @param [r, g, b] - The RGB color components (each between 0-255).
 * @returns A hex color string (e.g., "#ff6347").
 * @example
 * RGBToHex([255, 99, 71]); // Output: "#ff6347"
 */
export function RGBToHex([r, g, b]: RGB): ColorString {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}` as ColorString;
}

/**
 * Converts a hex color string into an RGB array.
 * This is like transforming a hex color back into its RGB roots!
 * 
 * @param hex - A hex color string (e.g., "#ff6347").
 * @returns An array of RGB components (e.g., [255, 99, 71]).
 * @example
 * HexToRGB("#ff6347"); // Output: [255, 99, 71]
 */
export function HexToRGB(hex: ColorString): RGB {
    const Hex = hex.slice(1);
    const R = parseInt(Hex.substring(0, 2), 16);
    const G = parseInt(Hex.substring(2, 4), 16);
    const B = parseInt(Hex.substring(4, 5), 16);

    return [R, G, B];
}
/**
 * Enum for terminal styles and colors.
 * This enum provides ANSI escape codes for various text formatting options in the terminal.
 */
export enum Styles {
    black = '\x1b[30m',
    red = '\x1b[31m',
    green = '\x1b[32m',
    yellow = '\x1b[33m',
    blue = '\x1b[34m',
    magenta = '\x1b[35m',
    cyan = '\x1b[36m',
    white = '\x1b[37m',
    bgBlack = '\x1b[40m',
    bgRed = '\x1b[41m',
    bgGreen = '\x1b[42m',
    bgYellow = '\x1b[43m',
    bgBlue = '\x1b[44m',
    bgMagenta = '\x1b[45m',
    bgCyan = '\x1b[46m',
    bgWhite = '\x1b[47m',
    reset = '\x1b[0m',
    bold = '\x1b[1m',
    underline = '\x1b[4m',
    invert = '\x1b[7m',
    hidden = '\x1b[8m',
    strikethrough = '\x1b[9m',
    brightBlack = '\x1b[90m',
    brightRed = '\x1b[91m',
    brightGreen = '\x1b[92m',
    brightYellow = '\x1b[93m',
    brightBlue = '\x1b[94m',
    brightMagenta = '\x1b[95m',
    brightCyan = '\x1b[96m',
    brightWhite = '\x1b[97m',
    bgBrightBlack = '\x1b[100m',
    bgBrightRed = '\x1b[101m',
    bgBrightGreen = '\x1b[102m',
    bgBrightYellow = '\x1b[103m',
    bgBrightBlue = '\x1b[104m',
    bgBrightMagenta = '\x1b[105m',
    bgBrightCyan = '\x1b[106m',
    bgBrightWhite = '\x1b[107m'
}


/**
 * Apply terminal styles to a text string.
 * This function allows you to apply various colors and styles to text in the terminal.
 * 
 * @param text - The text to be styled.
 * @param styles - An array of styles to apply to the text.
 * @returns The styled text with the corresponding ANSI escape codes.
 */
export function printText(text: string, styles?: string[]): string {
    return `${styles?.join('') ?? ''}${text}${Styles.reset}`;
}