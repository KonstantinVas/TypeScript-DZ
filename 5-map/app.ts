type Bucket = Array<[number | string | boolean | object, string | number | boolean | object]>;
type Primitive = number | string | boolean | object;
type Key = Primitive;
type Value = Primitive;

class Maps {
    private buckets: Bucket[];
    private size: number;

    constructor(size: number = 5) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => []);
    }

    private simpleHash(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    private createBucketWithHash(key: Key): Bucket {
        const hash = this.simpleHash(String(key));
        const bucket = this.buckets[hash];
        return bucket;
    }

    set(key: Key, value: Value): this {
        const bucket = this.createBucketWithHash(key);

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return this;
            }
        }

        bucket.push([key, value]);
        return this;
    }

    get(key: Key): void {
        const bucket = this.createBucketWithHash(key);

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] == key) {
                console.log(`Ключ найден со значением: ${bucket[i][1]}`);
            }
        }
        console.log('Такой ключ не найден');
    }

    has(key: Key): boolean {
        const bucket = this.createBucketWithHash(key);

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] == key) {
                return true;
            }
        }
        return false;
    }

    delete(key: Key): void {
        const bucket = this.createBucketWithHash(key);
        const index = bucket.findIndex(([k]) => k == key);

        if (index !== -1) {
            bucket.splice(index, 1)
            console.log('Элемент удален');
            return;
        }
        console.log('Элемент не найден');
    }

    clear(): void {
        this.buckets = new Array(this.size).fill(null).map(() => []);
        console.log(this.buckets);
    }
}