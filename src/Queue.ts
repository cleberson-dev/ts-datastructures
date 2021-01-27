type QueueNode<T> = {
  value: T;
  next?: QueueNode<T>;
}

class Queue<T> {
  private head?: QueueNode<T>;

  push(value: T) {
    const newNode: QueueNode<T> = { value };
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

  info() {
    let last = this.head;
    while (last) {
      console.log(last.value);
      last = last.next;
    }
  }
}

export default Queue;