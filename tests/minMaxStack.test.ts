import { test, describe, expect } from 'vitest';
import { MinMaxStack } from '../algorithmicProblems/MinMaxStack';

describe('MinMaxStack', () => {
  const minMaxStack = new MinMaxStack();
  minMaxStack.push(1);
  minMaxStack.push(5);
  minMaxStack.push(7);
  minMaxStack.push(3);
  minMaxStack.push(4);
  minMaxStack.push(-1);
  test('should return min value', () => {
    expect(minMaxStack.getMin()).toBe(-1);
  });
  test('should return max value', () => {
    expect(minMaxStack.getMax()).toBe(7);
  });
  test('should return min value', () => {
    minMaxStack.pop();
    expect(minMaxStack.getMin()).toBe(1);
  });
  test('should return max value', () => {
    minMaxStack.pop();
    minMaxStack.pop();
    minMaxStack.pop();
    expect(minMaxStack.getMax()).toBe(5);
  });
});
