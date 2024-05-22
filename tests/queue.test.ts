import { test, describe, expect } from 'vitest';
import { Queue } from '../dataStructures/Queue';

describe('Queue', () => {
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(9);
  queue.enqueue(8);
  test('should perform all basic operations', () => {
    expect(queue.peek()).toBe(10);
    expect(queue.dequeue()).toBe(10);
    expect(queue.peek()).toBe(9);
  });
});
