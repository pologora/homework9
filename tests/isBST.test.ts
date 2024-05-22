import { test, describe, expect } from 'vitest';
import { isBST } from '../algorithmicProblems/isBST';
import { BinaryNode } from '../dataStructures/BinaryTree';

export const root = new BinaryNode(50);
const node1 = new BinaryNode(30);
const node2 = new BinaryNode(70);
const node3 = new BinaryNode(20);
const node4 = new BinaryNode(40);
const node5 = new BinaryNode(60);
const node6 = new BinaryNode(80);
const node7 = new BinaryNode(10);
const node8 = new BinaryNode(35);
const node9 = new BinaryNode(65);

root.left = node1;
root.right = node2;

node1.left = node3;
node1.right = node4;

node3.left = node7;
node4.left = node8;

node2.left = node5;
node2.right = node6;

node5.right = node9;

describe('isBST', () => {
  test('should return true if binary tree is a binary search tree', () => {
    expect(isBST(root)).toBeTruthy();
  });
  test('should return false if binary tree is not a binary search tree', () => {
    node9.right = new BinaryNode(33);
    const result = isBST(root);

    expect(result).toBeFalsy();
  });
});
