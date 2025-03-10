export type ReadonlyCollection<Key, Value> = Omit<Collection<Key, Value>, 'clear' | 'delete' | 'forEach' | 'get' | 'set' | 'sort'> & ReadonlyMap<Key, Value>;

export interface Collection<Key, Value> {

  /**
   * Represents a generic collection with a key-value pair structure.
   * This interface includes the methods that allow modification of the collection, such as adding, removing, and updating entries.
   * 
   * @param Key - The type of keys in the collection.
   * @param Value - The type of values associated with each key in the collection.
   * 
   * @description This internal constructor type is used to enable references to `this.constructor` in methods that are part of the collection's class.
   */
  constructor: typeof Collection;
}


export class Collection<Key, Value> extends Map<Key, Value> {
    /**
	 * Checks if any of the elements exist in the collection.
	 *
	 * @param keys - The keys of the elements to check for
	 * @returns `true` if any of the elements exist, `false` if none exist.
	 */
    public hasAny(...keys: Key[]) {
        return keys.some((value) => super.has(value));
    }

    /**
	 * Identical to {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse | Array.reverse()}
	 * Returns a Collection instead of an Array.
	 */
	public reverse() {
		const entries = [...this.entries()].reverse();
		this.clear();
		for (const [key, value] of entries) this.set(key, value);
		return this;
	}

    /**
	 * Identical to {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/at | Array.at()}.
	 * Returns the item at a given index, allowing for positive and negative integers.
	 * Negative integers count back from the last item in the collection.
	 *
	 * @param index - The index of the element to obtain
	 */
    public at(index: number): Value | undefined {
        index = Math.trunc(index);
        if(index >= 0) {
            if(index >= this.size) return undefined;
        } else {
            index += this.size;
            if(index < 0) return undefined;
        }

        const values = this.values();
        for(let i = 0; i < index; i++) values.next();

        return values.next().value!;
    }

    /**
	 * Obtains unique random value(s) from this collection.
	 *
	 * @param amount - Amount of values to obtain randomly
	 * @returns A single value if no amount is provided or an array of values
	 */
	public random(): Value | undefined;
	public random(amount: number): Value[];
	public random(amount?: number): Value | Value[] | undefined {
		if (amount === undefined) return this.at(Math.floor(Math.random() * this.size));
		amount = Math.min(this.size, amount);
		if (!amount) return [];

		const values = [...this.values()];
		for (let i = 0; i < amount; i++) {
			const index = i + Math.floor(Math.random() * (values.length - i));
			[values[i], values[index]] = [values[index]!, values[i]!];
		}

		return values.slice(0, amount);
	}

    /**
	 * Searches for a single item where the given function returns a truthy value. This behaves like
	 * {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/find | Array.find()}.
	 * All collections used in Discord.js are mapped using their `id` property, and if you want to find by id you
	 * should use the `get` method. See
	 * {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map/get | MDN} for details.
	 *
	 * @param fn - The function to test with (should return a boolean)
	 * @param thisArg - Value to use as `this` when executing the function
	 */
	public find<NewValue extends Value>(fn: (value: Value, key: Key, collection: this) => value is NewValue): NewValue | undefined;
	public find(fn: (value: Value, key: Key, collection: this) => unknown): Value | undefined;
	public find<This, NewValue extends Value>(fn: (this: This, value: Value, key: Key, collection: this) => value is NewValue, thisArg: This): NewValue | undefined;
	public find<This>(fn: (this: This, value: Value, key: Key, collection: this) => unknown, thisArg: This): Value | undefined;
	public find(fn: (value: Value, key: Key, collection: this) => unknown, thisArg?: unknown): Value | undefined {
		if (typeof fn !== 'function') throw new TypeError(`${fn} is not a function`);
		if (thisArg !== undefined) fn = fn.bind(thisArg);
		for (const [key, val] of this) {
			if (fn(val, key, this)) return val;
		}

		return undefined;
	}

    /**
	 * Searches for the key of a single item where the given function returns a truthy value. This behaves like
	 * {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex | Array.findIndex()},
	 * but returns the key rather than the positional index.
	 *
	 * @param fn - The function to test with (should return a boolean)
	 * @param thisArg - Value to use as `this` when executing the function.
	 */
	public findKey<NewKey extends Key>(fn: (value: Value, key: Key, collection: this) => key is NewKey): NewKey | undefined;
	public findKey(fn: (value: Value, key: Key, collection: this) => unknown): Key | undefined;
	public findKey<This, NewKey extends Key>(fn: (this: This, value: Value, key: Key, collection: this) => key is NewKey, thisArg: This): NewKey | undefined;
	public findKey<This>(fn: (this: This, value: Value, key: Key, collection: this) => unknown, thisArg: This): Key | undefined;
	public findKey(fn: (value: Value, key: Key, collection: this) => unknown, thisArg?: unknown): Key | undefined {
		if (typeof fn !== 'function') throw new TypeError(`${fn} is not a function`);
		if (thisArg !== undefined) fn = fn.bind(thisArg);
		for (const [key, val] of this) {
			if (fn(val, key, this)) return key;
		}

		return undefined;
	}

	/**
	 * Searches for a last item where the given function returns a truthy value. This behaves like
	 * {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast | Array.findLast()}.
	 *
	 * @param fn - The function to test with (should return a boolean)
	 * @param thisArg - Value to use as `this` when executing the function
	 */
	public findLast<NewValue extends Value>(fn: (value: Value, key: Key, collection: this) => value is NewValue): NewValue | undefined;
	public findLast(fn: (value: Value, key: Key, collection: this) => unknown): Value | undefined;
	public findLast<This, NewValue extends Value>(fn: (this: This, value: Value, key: Key, collection: this) => value is NewValue, thisArg: This): NewValue | undefined;
	public findLast<This>(fn: (this: This, value: Value, key: Key, collection: this) => unknown, thisArg: This): Value | undefined;
	public findLast(fn: (value: Value, key: Key, collection: this) => unknown, thisArg?: unknown): Value | undefined {
		if (typeof fn !== 'function') throw new TypeError(`${fn} is not a function`);
		if (thisArg !== undefined) fn = fn.bind(thisArg);
		const entries = [...this.entries()];
		for (let index = entries.length - 1; index >= 0; index--) {
			const val = entries[index]![1];
			const key = entries[index]![0];
			if (fn(val, key, this)) return val;
		}

		return undefined;
	}

	/**
	 * Searches for the key of a last item where the given function returns a truthy value. This behaves like
	 * {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex | Array.findLastIndex()},
	 * but returns the key rather than the positional index.
	 *
	 * @param fn - The function to test with (should return a boolean)
	 * @param thisArg - Value to use as `this` when executing the function
	 */
	public findLastKey<NewKey extends Key>(fn: (value: Value, key: Key, collection: this) => key is NewKey): NewKey | undefined;
	public findLastKey(fn: (value: Value, key: Key, collection: this) => unknown): Key | undefined;
	public findLastKey<This, NewKey extends Key>(fn: (this: This, value: Value, key: Key, collection: this) => key is NewKey, thisArg: This): NewKey | undefined;
	public findLastKey<This>(fn: (this: This, value: Value, key: Key, collection: this) => unknown, thisArg: This): Key | undefined;
	public findLastKey(fn: (value: Value, key: Key, collection: this) => unknown, thisArg?: unknown): Key | undefined {
		if (typeof fn !== 'function') throw new TypeError(`${fn} is not a function`);
		if (thisArg !== undefined) fn = fn.bind(thisArg);
		const entries = [...this.entries()];
		for (let index = entries.length - 1; index >= 0; index--) {
			const key = entries[index]![0];
			const val = entries[index]![1];
			if (fn(val, key, this)) return key;
		}

		return undefined;
	}

    /**
	 * Identical to
	 * {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter | Array.filter()},
	 * but returns a Collection instead of an Array.
	 *
	 * @param fn - The function to test with (should return a boolean)
	 * @param thisArg - Value to use as `this` when executing the function
	 */
	public filter<NewKey extends Key>(fn: (value: Value, key: Key, collection: this) => key is NewKey): Collection<NewKey, Value>;
	public filter<NewValue extends Value>(fn: (value: Value, key: Key, collection: this) => value is NewValue): Collection<Key, NewValue>;
	public filter(fn: (value: Value, key: Key, collection: this) => unknown): Collection<Key, Value>;
	public filter<This, NewKey extends Key>(fn: (this: This, value: Value, key: Key, collection: this) => key is NewKey, thisArg: This): Collection<NewKey, Value>;
	public filter<This, NewValue extends Value>(fn: (this: This, value: Value, key: Key, collection: this) => value is NewValue, thisArg: This): Collection<Key, NewValue>;
	public filter<This>(fn: (this: This, value: Value, key: Key, collection: this) => unknown, thisArg: This): Collection<Key, Value>;
	public filter(fn: (value: Value, key: Key, collection: this) => unknown, thisArg?: unknown): Collection<Key, Value> {
		if (typeof fn !== 'function') throw new TypeError(`${fn} is not a function`);
		if (thisArg !== undefined) fn = fn.bind(thisArg);
		const results = new this.constructor[Symbol.species]<Key, Value>();
		for (const [key, val] of this) {
			if (fn(val, key, this)) results.set(key, val);
		}

		return results as any;
	}
}


const collection = new Collection();
