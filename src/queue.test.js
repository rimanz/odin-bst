import { describe, expect, test } from "@jest/globals";
import Queue from "./queue.js";

const arr = [1, 7, 4, 23];
const queue = new Queue();
queue.buildQueue(arr);

describe("Queue", () => {
  test("Queue class should exist!", () => {
    expect(queue).toBeDefined();
  });

  test("The value of queue.head.data should be 1", () => {
    const output = queue.head.data;
    const expected = 1;

    expect(output).toBe(expected);
  });

  test("The value of queue.tail.data should be 23", () => {
    const output = queue.tail.data;
    const expected = 23;

    expect(output).toBe(expected);
  });

  test("After adding 9, the value of queue.tail.data should be 9", () => {
    queue.enqueue(9);
    const output = queue.tail.data;
    const expected = 9;

    expect(output).toBe(expected);
  });

  test("After popping, popped data should return", () => {
    const popped = queue.dequeue();
    const output = popped.data;
    const expected = 1;

    expect(output).toBe(expected);
  });

  test("Now the value of queue.head.data should be 7", () => {
    const output = queue.head.data;
    const expected = 7;

    expect(output).toBe(expected);
  });

  test("Now the size of the queue should be 4", () => {
    const output = queue.size();
    const expected = 4;

    expect(output).toBe(expected);
  });

  test("Calling 'queue.toString' should return ( 7 ) <= ( 4 ) <= ( 23 ) <= ( 9 )'", () => {
    const output = queue.toString();
    const expected = "( 7 ) <= ( 4 ) <= ( 23 ) <= ( 9 )";

    expect(output).toBe(expected);
  });

  test("Calling 'queue.peek' should return a node with data 7", () => {
    const output = queue.peek().data;
    const expected = 7;

    expect(output).toBe(expected);
  });
});
