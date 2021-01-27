type LinkedListNode<T> = {
  next?: LinkedListNode<T>;
  value: T;
};

class LinkedList<T> {
  private head?: LinkedListNode<T>;

  push(value: T) {
    const newNode = { value };

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let last: LinkedListNode<T> = this.head;
    while (last.next) {
      last = last.next;
    }

    last.next = newNode;
  }

  forEach(callback: (T, int) => void) {
    let last: LinkedListNode<T> = this.head;
    let idx = 0;

    while (last) {
      callback(last.value, idx);
      last = last.next;
      idx += 1;
    }
  }

  toArray(): T[] {
    const newArray = [];
    let last: LinkedListNode<T> = this.head;
    while (last) {
      newArray.push(last.value);
      last = last.next;
    }
    return newArray;
  }

  info() {
    let last: LinkedListNode<T> = this.head;
    while (last) {
      console.log(last.value);
      last = last.next;
    }
  }

  get length(): number {
    let count = 0;

    let last: LinkedListNode<T> = this.head;
    while (last) {
      count += 1;
      last = last.next;
    }

    return count;
  }
}

export default LinkedList;
