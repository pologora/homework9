import { Stack } from '../dataStructures/Stack';

export class MinMaxStack extends Stack<number> {
  min: Stack<number>;
  max: Stack<number>;

  constructor() {
    super();
    this.max = new Stack();
    this.min = new Stack();
  }

  pop() {
    const value = this.peek();
    if (value != null) {
      this.setMinMaxOnPop(value);
    }

    return super.pop();
  }

  push(value: number) {
    this.setMinMaxOnPush(value);
    super.push(value);
  }

  private setMinMaxOnPush(value: number) {
    const peekMax = this.max.peek();
    const peekMin = this.min.peek();

    if (peekMax == null || peekMin == null) {
      this.max.push(value);
      this.min.push(value);
    } else if (peekMax < value) {
      this.max.push(value);
    } else if (peekMin > value) {
      this.min.push(value);
    }
  }

  private setMinMaxOnPop(value: number) {
    const peekMax = this.max.peek();
    const peekMin = this.min.peek();

    if (peekMax === value) {
      this.max.pop();
    }

    if (peekMin === value) {
      this.min.pop();
    }
  }

  getMin() {
    return this.min.peek();
  }

  getMax() {
    return this.max.peek();
  }
}
