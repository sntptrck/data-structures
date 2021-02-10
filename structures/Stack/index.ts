export class Stack {
  stack: any[] = [];

  push(item: unknown) {
    this.stack.push(item);
  }
  pop() {
    this.stack.pop();
  }
  isEmpty(): boolean {
    return !this.stack.length;
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
}
