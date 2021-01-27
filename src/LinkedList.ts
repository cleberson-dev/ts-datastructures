type LinkedListNode<T> = {
  next?: LinkedListNode<T>;
  value: T;
}

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

  info() {
    let last: LinkedListNode<T> = this.head;
    while (last) {
      console.log(last.value);
      last = last.next;
    }
  }
}

export default LinkedList;