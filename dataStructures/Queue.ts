class QueueNode<T> {
  next: QueueNode<T> | undefined;
  prev: QueueNode<T> | undefined;
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}

export class Queue<T> {
  head: QueueNode<T> | undefined;
  tail: QueueNode<T> | undefined;

  enqueue(value: T) {
    const newNode = new QueueNode(value);
    if (!this.tail) {
      this.tail = this.head = newNode;
    } else {
      newNode.next = this.tail;
      this.tail.prev = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return undefined;
    }

    const node = this.head;

    if (!this.head.prev) {
      this.head = this.tail = undefined;
    } else {
      this.head.prev.next = undefined;
      this.head = this.head.prev;
    }

    return node.value;
  }

  peek() {
    return this.head?.value;
  }
}
