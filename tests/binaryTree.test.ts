import { beforeEach, describe, expect, test } from 'vitest';
import { BinaryTree } from '../dataStructures/BinaryTree';

describe('BinaryTree', () => {
  let tree: BinaryTree<number>;

  beforeEach(() => {
    tree = new BinaryTree<number>();
  });

  test('should insert nodes correctly', () => {
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.insert(4);

    expect(tree.root?.value).toBe(1);
    expect(tree.root?.left?.value).toBe(2);
    expect(tree.root?.right?.value).toBe(3);
    expect(tree.root?.left?.left?.value).toBe(4);
  });

  test('should find nodes correctly', () => {
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);

    expect(tree.find(1)).toBe(true);
    expect(tree.find(2)).toBe(true);
    expect(tree.find(3)).toBe(true);
    expect(tree.find(4)).toBe(false);
  });

  test('should traverse the tree in pre-order correctly', () => {
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.insert(4);
    tree.insert(5);

    const result = tree.preOrder();
    expect(result).toEqual([1, 2, 4, 5, 3]);
  });

  test('should traverse the tree in in-order correctly', () => {
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.insert(4);
    tree.insert(5);

    const result = tree.inOrder();
    expect(result).toEqual([4, 2, 5, 1, 3]);
  });

  test('should traverse the tree in post-order correctly', () => {
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.insert(4);
    tree.insert(5);

    const result = tree.postOrder();
    expect(result).toEqual([4, 5, 2, 3, 1]);
  });

  test('should traverse the tree in level-order correctly', () => {
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.insert(4);
    tree.insert(5);

    const result = tree.levelOrder();
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
