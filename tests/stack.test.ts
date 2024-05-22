import { test, describe, expect } from 'vitest';
import { Stack } from '../dataStructures/Stack';

describe('Stuck', () => {
  const stuck = new Stack();
  stuck.push(10);
  stuck.push(4);
  stuck.push(3);
  stuck.push(12);
  stuck.pop();
  test('should correctly perform base operations', () => {
    expect(stuck.peek()).toBe(3);
    expect(stuck.pop()).toBe(3);
    expect(stuck.peek()).toBe(4);
  });
  test('should correctly perform push operation', () => {
    stuck.push(1);
    expect(stuck.peek()).toBe(1);
    expect(stuck.pop()).toBe(1);
    expect(stuck.peek()).toBe(4);
  });
});
