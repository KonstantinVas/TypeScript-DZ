interface IUser {
    name: string;
    age: number;
    skills: string[];
}

const user: IUser = {
    name: 'Vasya',
    age: 8,
    skills: ['typescript', 'javascript']
}

function pickObjectKeys<T extends IUser, K extends keyof T>(obj: T, keys: K[]): Record<K, T[K]> {
    return keys.reduce((acc, key) => {
        if (key in obj) {
            acc[key] = obj[key];
        }
        return acc;
    }, {} as Record<K, T[K]>);
}

const res = pickObjectKeys(user, ['age', 'skills']);
console.log(res);