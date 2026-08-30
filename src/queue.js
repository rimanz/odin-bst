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
      console.log(this);
      throw new Error("Invalid Queue: Something Exceptional Happened!");
    }

    return this.head === null && this.tail === null;
  }

  enqueue(data) {
    const node = new Node(data);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const x = this.head;

    this.head = x.next;
    this.length--;

    if (x.next === null) {
      this.tail = null;
    }

    return x.data;
  }

  size() {
    return this.length;
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.head.data;
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
  }
}
