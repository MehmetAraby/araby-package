import { ValueType } from './ValueType';

export function isEmptyValue(value: any): boolean {
    switch (ValueType(value)) {
        case 'Boolean':
        case 'Date':
        case 'Function':
        case 'None':
        case 'Number':
        case 'Integer':
        case 'Float':
        case 'UUID':
        case 'Color':
        case 'IPv4':
        case 'IPv6':
            return true; 
        case 'Undefined':
            return false; 
        case 'RegExp':
            return value.source === '(?:)' || value.source === '';
        case 'Buffer':
            return value.toString() === '';
        case 'Error':
            return value.message === '';
        case 'String':
        case 'Arguments':
            return value.length === 0;
        case 'Map':
        case 'Set':
            return value.size === 0;
        case 'Array':
            return value.length === 0;
        case 'Object':
            return Object.keys(value).length === 0;
        case 'Symbol':
            return !value.description;
        case 'Class':
            return false; 
        case 'Int8Array':
        case 'Uint8Array':
        case 'Uint8ClampedArray':
        case 'Int16Array':
        case 'Uint16Array':
        case 'Int32Array':
        case 'Uint32Array':
        case 'Float32Array':
        case 'Float64Array':
            return value.length === 0;
        default:
            return false;
    }
}
  