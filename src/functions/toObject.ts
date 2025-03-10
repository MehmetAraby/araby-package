/**
 * Converts the given object into a new object by including properties that don't start with an underscore ('_').
 * The function maps each of the remaining properties to their corresponding values or custom values provided in the `props` argument.
 * 
 * @param object - The object to be transformed.
 * @param props - The properties to be included in the new object, which may override the values of properties from the `object`.
 * @returns A new object with filtered and possibly transformed properties.
 * 
 * @example
 * const obj = { _private: 'hidden', name: 'John', age: 30 };
 * const result = toObject(obj, { age: 25 });
 * console.log(result);  // Output: { name: 'John', age: 25 }
 */
export function toObject(object: Record<string, any>, ...props: Array<Record<string, any>>): Record<string, any> {
    if(typeof object !== 'object') return object;

    const ObjectProperties = Object.keys(object).filter((value) => !value.startsWith('$') || !value.startsWith('_')).reduce((a: any, b: any) => {
        a[b] = true;
        return a;
    }, {});

    props = Object.keys(ObjectProperties).length ? [ObjectProperties, ...props] : props;

    const NodeObject: Record<string, any> = {}

    for(let [Key, Value] of Object.entries(Object.assign({}, ...props))) {
        if (!Value) continue; 
        Value = Value === true ? object[Key] : Value;
        NodeObject[Key] = (typeof Value === 'object' && Value !== null) ? toObject(Value) : Value
    }

    return NodeObject;
}


