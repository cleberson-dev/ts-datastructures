import LinkedList from "./LinkedList";

type HashTableLLNode<T> = {
  key: string;
  data: T;
}


export default class HashTable<T> {
  private values: Array<LinkedList<HashTableLLNode<T>>>;
  
  constructor(private capacity: number) {
    this.values = new Array(this.capacity).fill(new LinkedList());
  }

  put(key: string, value: T) {
    const hashCode = this.getHashCode(key);
    const currentList = this.values[hashCode];

    for (const node of currentList) {
      if (node.key === key) throw new Error("Key already exists");
    }

    currentList.push({ key, data: value });
  }

  get(key: string): T | undefined {
    const hashCode = this.getHashCode(key);

    const currentList = this.values[hashCode];

    let found: T | undefined;
    for (const node of currentList) {
      if (key === node.key) {
        found = node.data;
        break;
      }
    }

    return found;
  }

  getHashCode(key: string): number {
    const keyValue = [...key].reduce((prev, acc) => prev + acc.charCodeAt(0), 0);

    // Division Method
    // const finalHashCode = keyValue % this.capacity;

    // Multiplication Method
    const A = 0.618033;
    const finalHashCode = Math.floor(this.capacity * (keyValue * A % 1));

    return finalHashCode;
  }
}