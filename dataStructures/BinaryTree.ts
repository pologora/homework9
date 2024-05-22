import { Queue } from './Queue';
import { Stack } from './Stack';

export class BinaryNode<T> {
  left: BinaryNode<T> | undefined;
  right: BinaryNode<T> | undefined;
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

export class BinaryTree<T> {
  root: BinaryNode<T> | undefined;
  size: number;

  constructor() {
    this.size = 0;
  }

  insert(value: T) {
    const node = new BinaryNode(value);
    this.size++;

    if (!this.root) {
      this.root = node;
      return this;
    }

    const queue = new Queue<BinaryNode<T>>();
    queue.enqueue(this.root);

    while (queue.peek()) {
      const dequeue = queue.dequeue();

      if (!dequeue) throw new Error('Something goes wrong. Bad queue implementation, please check your datastructure.');

      if (!dequeue.left) {
        dequeue.left = node;
        return this;
      } else if (!dequeue.right) {
        dequeue.right = node;
        return this;
      } else {
        queue.enqueue(dequeue.left);
        queue.enqueue(dequeue.right);
      }
    }
  }

  find(value: T) {
    if (!this.root) {
      return false;
    }

    const stack = new Stack<BinaryNode<T>>();
    stack.push(this.root);

    while (stack.length) {
      const node = stack.pop();
      if (node?.value === value) {
        return true;
      }

      if (node?.left) {
        stack.push(node.left);
      }

      if (node?.right) {
        stack.push(node.right);
      }
    }

    return false;
  }

  /**
   * Calls callback function on every element of a tree in a pre order order (depth-first) and add the result to an array.
   * If no callback provided add node value to an array
   * @param fn callback function
   * @returns  array of node values or results of callback calls on that values
   */
  preOrder(fn: (val: T) => any | void = (val: T) => val) {
    function walk(node: BinaryNode<T> | undefined, path: T[]) {
      if (!node) return [];

      path.push(fn(node.value));
      walk(node.left, path);
      walk(node.right, path);

      return path;
    }

    return walk(this.root, []);
  }

  /**
   * Calls callback function on every element of a tree in order order (depth-first) and add the result to an array.
   * If no callback provided add node value to an array
   * @param fn callback function
   * @returns array of node values or results of callback calls on that values
   */
  inOrder(fn: (val: T) => any | void = (val: T) => val) {
    function walk(node: BinaryNode<T> | undefined, path: T[]) {
      if (!node) return [];

      walk(node.left, path);
      path.push(fn(node.value));
      walk(node.right, path);

      return path;
    }

    return walk(this.root, []);
  }

  /**
   * Calls callback function on every element of a tree in a post order order (depth-first) and add the result to an array.
   * If no callback provided add node value to an array
   * @param fn callback function
   * @returns array of node values or results of callback calls on that values
   */
  postOrder(fn: (val: T) => any | void = (val: T) => val) {
    function walk(node: BinaryNode<T> | undefined, path: T[]) {
      if (!node) return [];

      walk(node.left, path);
      walk(node.right, path);
      path.push(fn(node.value));

      return path;
    }

    return walk(this.root, []);
  }

  /**
   * Calls callback function on every element of a tree in level order order (breadth-first) and add the result to an array.
   * If no callback provided add node value to an array
   * @param fn callback function
   * @returns array of node values or results of callback calls on that values
   */
  levelOrder(fn: (val: T) => any | void = (val: T) => val) {
    if (!this.root) {
      return [];
    }

    const result = [];
    const queue = new Queue<BinaryNode<T>>();
    queue.enqueue(this.root);

    while (queue.peek()) {
      const node = queue.dequeue();
      // for a typescript
      if (!node) {
        throw new Error('Somthing goes wrong. Bad queue implementation, please check your datastructure.');
      }

      result.push(fn(node.value));

      if (node.left) {
        queue.enqueue(node.left);
      }

      if (node.right) {
        queue.enqueue(node.right);
      }
    }
  }
}
