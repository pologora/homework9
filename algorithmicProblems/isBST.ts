import { BinaryNode } from '../dataStructures/BinaryTree';

export function isBST(root: BinaryNode<any>) {
  function walk(
    node: BinaryNode<number> | undefined,
    left: number | undefined = undefined,
    right: number | undefined = undefined,
  ): boolean {
    if (!node) {
      return true;
    }

    if ((right && node.value > right) || (left && node.value < left)) {
      return false;
    }

    return walk(node.left, left, node.value) && walk(node.right, node.value, right);
  }

  return walk(root);
}
