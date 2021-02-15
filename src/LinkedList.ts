type LinkedListNode<T> = {
  next?: LinkedListNode<T>;
  value: T;
};

class LinkedList<T> {
  private head?: LinkedListNode<T>;

  constructor(initialValue?: T) {
    if (initialValue !== undefined) {
      this.push(initialValue);
    }
  }

  push(value: T) {
    const newNode = { value };

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let last = this.head;
    while (last.next) {
      last = last.next;
    }

    last.next = newNode;
  }

  forEach(callback: (val: T, idx: number) => void) {
    let last = this.head;
    let idx = 0;

    while (last) {
      callback(last.value, idx);
      last = last.next;
      idx += 1;
    }
  }

  toArray(): T[] {
    const newArray = [];
    let last = this.head;
    while (last) {
      newArray.push(last.value);
      last = last.next;
    }
    return newArray;
  }

  info() {
    let last = this.head;
    while (last) {
      console.log(last.value);
      last = last.next;
    }
  }

  get length(): number {
    let count = 0;

    let last = this.head;
    while (last) {
      count += 1;
      last = last.next;
    }

    return count;
  }

  deleteAt(index: number) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let count = 0;
    let temp: LinkedListNode<T> | undefined = this.head;
    while (temp && count + 1 !== index) {
      temp = temp.next;
      count += 1;
    }
    if (!temp) return;
    if (count + 1 !== index) return;

    temp.next = temp.next?.next;
  }

  *[Symbol.iterator]() {
    let last = this.head;

    while (last) {
      yield last.value;
      last = last.next;
    }
  }
}

export default LinkedList;
