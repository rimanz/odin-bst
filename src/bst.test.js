import { describe, expect, test } from "@jest/globals";
import Tree from "./bst.js";

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(arr);

describe("Binary Search Tree", () => {
  test("Node class should exist!", () => {
    expect(Tree).toBeDefined();
  });

  test("The value of tree.root.data should be 8", () => {
    const output = tree.root.data;
    const expected = 8;

    expect(output).toBe(expected);
  });

  test("The value of tree.root.data should be 8", () => {
    const output = tree.root.data;
    const expected = 8;

    expect(output).toBe(expected);
  });

  test("The value of tree.root.left.data should be 4", () => {
    const output = tree.root.left.data;
    const expected = 4;

    expect(output).toBe(expected);
  });

  test("The value of tree.root.right.data should be 67", () => {
    const output = tree.root.right.data;
    const expected = 67;

    expect(output).toBe(expected);
  });

  test('tree.includes(9) should return "true"', () => {
    const output = tree.includes(9);
    const expected = true;

    expect(output).toBe(expected);
  });

  test('tree.includes(19) should return "false"', () => {
    const output = tree.includes(19);
    const expected = false;

    expect(output).toBe(expected);
  });

  test('After inserting 19, tree.includes(19) should return "true"', () => {
    tree.insert(19);
    const output = tree.includes(19);
    const expected = true;

    expect(output).toBe(expected);
  });

  test("'levelOrderForEach' should discover data level by level, left to right", () => {
    const output = [];
    tree.levelOrderForEach((i) => output.push(i));
    const expected = [8, 4, 67, 3, 7, 23, 6345, 1, 5, 9, 324, 19];

    expect(output).toEqual(expected);
  });

  test("'levelOrderForEach' should throw an error if no callback provided", () => {
    expect(() => tree.levelOrderForEach()).toThrow("A callback is required!");
  });

  test("'inOrderForEach' should throw an error if no callback provided", () => {
    expect(() => tree.inOrderForEach()).toThrow("A callback is required!");
  });

  test("'inOrderForEach' should discover data level by level, left to right", () => {
    const output = [];
    tree.inOrderForEach((i) => output.push(i));
    const expected = [1, 3, 4, 5, 7, 8, 9, 19, 23, 67, 324, 6345];

    expect(output).toEqual(expected);
  });
});
