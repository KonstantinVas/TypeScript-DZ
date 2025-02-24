const obj: Record<string, number> = {
    a: 1,
    b: 2
}

function swapKeysAndValues<T extends Record<string, string | number>>(obj: T): Record<string, string> {
    const swapped: Record<string, string> = {};

    for (const [key, value] of Object.entries(obj)) {
        swapped[String(value)] = key;
    }

    return swapped;
}

console.log(swapKeysAndValues(obj));