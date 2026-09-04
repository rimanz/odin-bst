# Odin Binary Search Tree

An implementation of a binary-search-trees created as an assignment for [The Odin Project](https://www.theodinproject.com/lessons/javascript-binary-search-trees).

## Overview

This repository contains an implementation of a `Binary Search Tree` wiht a lightweight test setup using Jest. It's intended for learning data structures and practicing JavaScript.

## Prerequisites

- Node.js 14+
- npm

## Quick Start

1. Clone the repository:

```bash
git clone https://github.com/rimanz/odin-bst.git
cd odin-bst
```

2. Install dependencies:

```bash
npm install
```

3. Run the test suite:

```bash
npm test
```

4. Run the demo script:

```bash
node main.js
```

To watch tests while developing:

```bash
npm run watch
```

## Project Structure

```text
.
├── babel.config.js
├── main.js
├── package.json
├── README.md
├── utils.js
├── src/
│   ├── bst.js
│   ├── bst.test.js
│   ├── queue.js
│   └── queue.test.js
└── node_modules/
```

## Usage

Import the `Tree` class from the BST module and create a tree from an array:

```js
import Tree from "./src/bst.js";

const values = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(values);

console.log(tree.root.data); // 8
console.log(tree.includes(23)); // true

// Traversals
const inOrder = [];
const preOrder = [];
const postOrder = [];

tree.inOrderForEach((value) => inOrder.push(value));
tree.preOrderForEach((value) => preOrder.push(value));
tree.postOrderForEach((value) => postOrder.push(value));

console.log(inOrder);
console.log(preOrder);
console.log(postOrder);

// Insert and rebalance

tree.insert(100);
tree.rebalance();
console.log(tree.isBalanced()); // true
```

## API

`new Tree()` - Creates an instance of Tree.

`buildTree(arr)` - Constructs a balanced binary search tree from an array.

`includes(value)` - Returns `true` if the value exists in the tree, otherwise `false`.

`insert(value)` - Inserts a new node into the tree while preserving BST ordering.

`delete(value)` - Deletes a node from the tree if it exists.

`levelOrderForEach(callback)` - Visits the tree in breadth-first order, left to right, and calls `callback` for each value.

`inOrderForEach(callback)` - Visits the tree in left-root-right order.

`preOrderForEach(callback)` - Visits the tree in root-left-right order.

`postOrderForEach(callback)` - Visits the tree in left-right-root order.

`find(value)` - Returns the node containing the searched value, or `undefined` if it does not exist.

`heigth(value)` - Returns the height of the node for the given value. Note: the method name is intentionally spelled as `heigth` to match the assignment requirement.

`depth(value)` - Returns the depth of the given value from the tree root.

`isBalanced()` - Returns `true` if the tree is balanced, otherwise `false`.

`rebalance()` - Rebuilds the tree to ensure it is balanced.

## Tests

The project uses Jest for unit tests. The test suite verifies BST behavior including root placement, traversal order, insertion, height depth, balance checks, and rebalancing.

Run the tests with:

```bash
npm test
```

## License

This project is licensed under the ISC license.

## Author

Riman Das

## Credits

Built as an exercise for [The Odin Project](https://www.theodinproject.com/lessons/javascript-binary-search-trees).
