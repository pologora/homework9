export class Node<T> {
  next: Node<T> | undefined;
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}

export class Stack<T> {
  head: Node<T> | undefined;
  length: number;

  constructor() {
    this.length = 0;
  }

  pop() {
    const node = this.head;
    this.head = this.head?.next;

    if (this.length > 0) {
      this.length--;
    }

    return node?.value;
  }

  push(value: T) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  peek() {
    return this.head?.value;
  }
}
