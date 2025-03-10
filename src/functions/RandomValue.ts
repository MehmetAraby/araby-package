// public random(amount?: number): Value | Value[] | undefined {
//     if (amount === undefined) return this.at(Math.floor(Math.random() * this.size));
//     amount = Math.min(this.size, amount);
//     if (!amount) return [];

//     const values = [...this.values()];
//     for (let sourceIndex = 0; sourceIndex < amount; sourceIndex++) {
//         const targetIndex = sourceIndex + Math.floor(Math.random() * (values.length - sourceIndex));
//         [values[sourceIndex], values[targetIndex]] = [values[targetIndex]!, values[sourceIndex]!];
//     }

//     return values.slice(0, amount);
// }


export function random(arr?: any[], amount?: number) {

}