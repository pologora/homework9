import { SinglyLinkedListNode } from '../dataStructures/LinkedList';

export function hasCycle(head: SinglyLinkedListNode<any> | undefined) {
  let fast = head;
  let slow = head;

  while (fast != null && fast.next != null) {
    fast = fast.next?.next;
    slow = slow?.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
}
