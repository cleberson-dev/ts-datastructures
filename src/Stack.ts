type StackNode<T> = {
  value: T;
  next?: StackNode<T>;
}

class Stack<T> {
  private head?: StackNode<T>;

  push(value: T) {
    const newNode: StackNode<T> = { value };

    newNode.next = this.head;
    this.head = newNode;
  }

  info() {
    let last = this.head;
    while (last) {
      console.log(last.value);
      last = last.next;
    }
  }
}

export default Stack;