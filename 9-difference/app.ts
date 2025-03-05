interface IA {
    a: number;
    b: string;
}

interface IB {
    a: number;
    c: boolean;
}

let a: IA = { a: 5, b: '' };
let b: IB = { a: 10, c: true };

function difference<T extends object, B extends object>(a: T, b: B): Pick<T, Exclude<keyof T, keyof B>> {
    const result = {} as Pick<T, Exclude<keyof T, keyof B>>;

    for (let key in a) {
        if (!(key in b)) {
            (result as any)[key] = a[key];
        }
    }
    return result;
}

let v0 = difference(a, b); // ?

console.log(v0);