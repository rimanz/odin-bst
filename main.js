import Tree from "./src/bst.js";
import { prettyPrint } from "./utils.js";

// ========== PART 1: BUILDING ==========
// Building an array with some random numbers smaller than 100:
const arr = Array.from(
  { length: 10 },
  () => Math.floor(Math.random() * 99) + 1,
);

// Build a tree using that array:
const tree = new Tree(arr);

console.log(`\nTree built from ${arr.join(", ")}: \n`);
prettyPrint(tree.root);
console.log("\n");

// Confirm that the tree is balanced:
console.log("The tree is balanced: ", "\t", tree.isBalanced());

// Print out all elements in pre, post, and in order:
const preOrder = [];
const inOrder = [];
const postOrder = [];

tree.preOrderForEach((i) => preOrder.push(i));
tree.inOrderForEach((i) => inOrder.push(i));
tree.postOrderForEach((i) => postOrder.push(i));

console.log("Items in pre-order:", "\t", preOrder.join(", "));
console.log("Items in in-order:", "\t", inOrder.join(", "));
console.log("Items in post-order:", "\t", postOrder.join(", "));

console.log("\n----------------------------------------------\n");

// ========== PART 2: UNBALANCING ==========
// Unbalacing the tree:
[128, 512].forEach((n) => tree.insert(n));

console.log("After unbalacing the tree:\n");
prettyPrint(tree.root);
console.log("\n");

// Confirm if the tree is still balanced now:
console.log("The tree is balanced: ", "\t", tree.isBalanced());

console.log("\n----------------------------------------------\n");

// ========== PART 3: REBALANCING ==========
// Rebalancing the tree:
tree.rebalance();

console.log("After rebalancing the tree:\n");
prettyPrint(tree.root);
console.log("\n");

// Confirm if the tree is balanced again:
console.log("The tree is balanced: ", "\t", tree.isBalanced());

// Print out all elements in pre, post, and in order:
const preOrderRebalanced = [];
const inOrderRebalanced = [];
const postOrderRebalanced = [];

tree.preOrderForEach((i) => preOrderRebalanced.push(i));
tree.inOrderForEach((i) => inOrderRebalanced.push(i));
tree.postOrderForEach((i) => postOrderRebalanced.push(i));

console.log("Items in pre-order:", "\t", preOrderRebalanced.join(", "));
console.log("Items in in-order:", "\t", inOrderRebalanced.join(", "));
console.log("Items in post-order:", "\t", inOrderRebalanced.join(", "));
console.log();
