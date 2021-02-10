export class Queue {
  queue: any[] = [];
  tail: number = 0;
  head: number = 0;

  enqueue(item: unknown) {
    this.queue[this.tail++] = item;
  }
  dequeue() {
    if (this.tail === this.head)  return
    const item = this.queue[this.head];
    delete this.queue[this.head++];
    return item;
  }
  get isEmpty(): boolean {
    return this.tail === this.head;
  }
  get size() {
    return this.tail - this.head;
  }
}
