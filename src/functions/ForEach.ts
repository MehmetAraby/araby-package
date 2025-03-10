export function forEachBefore<Value = any>(object: Value[], fn: (value: Value, index: number, array: Value[]) => boolean | void, index: number, thisArg?: any): void {
    if (!Array.isArray(object) || index <= 0) return;

    for (let i = 0; i < Math.min(index, object.length); i++) {
        if (fn.call(thisArg, object[i], i, object) === false) break;
    }
}


export function forEach<Value = any>(object: Value[], fn: (value: Value, index: number, array: Value[]) => boolean | void, thisArg?: any): void {
    if (!Array.isArray(object)) return;

    for (let i = 0; i < object.length; i++) {
        if (fn.call(thisArg, object[i], i, object) === false) break;
    }
}

export function forEachAfter<Value = any>(object: Value[], fn: (value: Value, index: number, array: Value[]) => boolean | void, index: number, thisArg?: any): void {
    if (!Array.isArray(object) || index >= object.length) return;

    for (let i = index + 1; i < object.length; i++) {
        if (fn.call(thisArg, object[i], i, object) === false) break;
    }
}
