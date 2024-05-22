export class SinglyLinkedListNode<T> {
  value: T;
  next: SinglyLinkedListNode<T> | undefined;
  constructor(value: T) {
    this.value = value;
  }
}

export class SinglyLinkedList<T> {
  length: number;
  head: SinglyLinkedListNode<T> | undefined;
  constructor() {
    this.length = 0;
  }

  prepend(value: T) {
    const node = new SinglyLinkedListNode(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  append(value: T) {
    const node = new SinglyLinkedListNode(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.length++;
  }

  insertAt(idx: number, value: T) {
    if (!this.validateIdx(idx)) {
      return undefined;
    }

    if (idx === 1) {
      this.prepend(value);
      this.length++;
      return true;
    }

    const node = new SinglyLinkedListNode(value);
    let current = this.head as SinglyLinkedListNode<T>;

    for (let i = 1; i < idx; i++) {
      current = current.next as SinglyLinkedListNode<T>;
    }

    node.next = current.next;
    current.next = node;

    this.length++;
  }

  removeAt(idx: number) {
    if (!this.validateIdx(idx) || !this.head) {
      return undefined;
    }

    if (idx === 1) {
      const node = this.head;
      this.head = this.head?.next;
      node.next = undefined;
      this.length--;

      return node.value;
    }

    let current = this.head as SinglyLinkedListNode<T>;
    for (let i = 1; i < idx; i++) {
      current = current.next as SinglyLinkedListNode<T>;
    }

    const node = current.next;
    current.next = node!.next;

    node!.next = undefined;
    return node!.value;
  }

  remove(value: T) {
    if (this.head?.value === value) {
      const node = this.head;
      this.head = this.head.next;
      node.next = undefined;
      this.length--;

      return node.value;
    }

    let current = this.head;
    while (current?.next) {
      if (current.next.value === value) {
        const node = current.next;
        current.next = node.next;
        node.next = undefined;
        this.length--;

        return node.value;
      }

      current = current.next;
    }

    return undefined;
  }

  get(idx: number) {
    if (!this.validateIdx(idx)) {
      return undefined;
    }

    if (idx === 1) {
      return this.head?.value;
    }

    let current = this.head;
    for (let i = 1; i < idx; i++) {
      current = current?.next;
    }

    return current?.value;
  }

  search(value: T) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  private validateIdx(idx: number) {
    if (idx <= 0 || idx > this.length) {
      return false;
    }
  }
}
