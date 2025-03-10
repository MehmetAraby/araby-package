// Define the possible return types for the ValueType function
type ValueTypeResults =
    | 'UUID'
    | 'Color'
    | 'IPv4'
    | 'IPv6'
    | 'BigInt'
    | 'Boolean'
    | 'Float'
    | 'Number'
    | 'Integer'
    | 'String'
    | 'Undefined'
    | 'None'
    | 'Class'
    | 'Function'
    | 'Array'
    | 'Error'
    | 'Symbol'
    | 'Buffer'
    | 'Date'
    | 'RegExp'
    | 'Arguments'
    | 'Map'
    | 'Set'
    | 'WeakMap'
    | 'WeakSet'
    | 'Int8Array'
    | 'Uint8Array'
    | 'Uint8ClampedArray'
    | 'Int16Array'
    | 'Uint16Array'
    | 'Int32Array'
    | 'Uint32Array'
    | 'Float32Array'
    | 'Float64Array'
    | 'Object'
    | 'MapIterator'
    | 'SetIterator'
    | 'StringIterator'
    | 'ArrayIterator'
    | 'UNKNOWN_TYPE';

/**
 * Determines the type of a given value and returns it as a string.
 * Supports basic types, complex objects, iterators, and specific formats like UUID and IP addresses.
 * @param value - The value to be checked.
 * @returns {ValueTypeResults} The type of the input value.
 */
export function ValueType(value: any): ValueTypeResults {
    if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(value)) return 'UUID';
    if (/^#([0-9A-F]{3}){1,2}$/i.test(value) || /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/.test(value)) return 'Color';
    if (/^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.test(value)) return 'IPv4';
    if (/^([a-fA-F0-9:]+:+)+[a-fA-F0-9]+$/.test(value)) return 'IPv6';
    if (typeof value === 'bigint') return 'BigInt';
    if (typeof value === 'boolean') return 'Boolean';
    if (typeof value === 'number' && !Number.isInteger(value)) return 'Float';
    if (Number.isInteger(value)) return 'Integer';
    if (typeof value === 'number') return 'Number';
    if (typeof value === 'string') return 'String';
    if (typeof value === 'undefined') return 'Undefined';
    if (value === null) return 'None';
    if (typeof value === 'function' && value.toString().startsWith('class')) return 'Class';
    if (typeof value === 'function' && value.toString().startsWith('function')) return 'Function';
    if (Array.isArray(value)) return 'Array';
    if (value instanceof Error) return 'Error';
    if (typeof value === 'symbol') return 'Symbol';
    if (Buffer.isBuffer(value)) return 'Buffer';
    if (value instanceof Date) return 'Date';
    if (value instanceof RegExp) return 'RegExp';
    if (typeof value === 'object' && typeof value.length === 'number' && typeof value.callee === 'function') return 'Arguments';

    const Types: ValueTypeResults[] = [
        'Map',
        'Set',
        'WeakMap',
        'WeakSet',
        'Int8Array',
        'Uint8Array',
        'Uint8ClampedArray',
        'Int16Array',
        'Uint16Array',
        'Int32Array',
        'Uint32Array',
        'Float32Array',
        'Float64Array'
    ]

    for (const Value of Types) {
        if (typeof value.constructor === 'function' && value.constructor.name === Value) return Value;
    }

    switch (Object.prototype.toString.call(value)) {
        case '[object Object]':
        return 'Object';
        case '[object Map Iterator]':
        return 'MapIterator';
        case '[object Set Iterator]':
        return 'SetIterator';
        case '[object String Iterator]':
        return 'StringIterator';
        case '[object Array Iterator]':
        return 'ArrayIterator';
    }

    return 'UNKNOWN_TYPE';
}
