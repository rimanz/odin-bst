class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    if (this.tail && this.head === null) {
      // Exceptional case
      throw new Error("Invalid Queue: Something Exceptional Hppened!");
    }

    return this.head === null && this.tail === null;
  }

  enqueue(data) {
    const node = new Node(data);

    this.isEmpty() ? (this.head = node) : (this.tail.next = node);
    this.tail = node;
    this.length++;
  }

  dequeue() {
    const x = this.head;

    this.head = x.next;
    this.length--;

    return x;
  }

  size() {
    return this.length;
  }

  peek() {
    return this.head;
  }

  buildQueue(arr) {
    arr.forEach((item) => this.enqueue(item));
  }

  toString() {
    const outputs = [];
    let current = this.head;

    while (current) {
      outputs.push(`( ${current.data} )`);
      current = current.next;
    }

    return outputs.join(" <= ");
    console.log(output);
  }
}
