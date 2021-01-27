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

  info() {
    let last: LinkedListNode<T> = this.head;
    while (last) {
      console.log(last.value);
      last = last.next;
    }
  }
}

export default LinkedList;
