class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export default class Tree {
  constructor(arr) {
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    arr = Array.from(new Set(arr)).toSorted((a, b) => a - b);
    if (arr.length === 0) return null;

    const mid = Math.floor(arr.length / 2);
    const root = new Node(arr[mid]);

    root.left = this.buildTree(arr.slice(0, mid));
    root.right = this.buildTree(arr.slice(mid + 1));

    return root;
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null || node === undefined) {
      return;
    }

    this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }

  includes(value, root = this.root) {
    if (root === null) {
      return false;
    } else if (value === root.data) {
      return true;
    } else if (value < root.data) {
      return this.includes(value, root.left);
    } else if (value > root.data) {
      return this.includes(value, root.right);
    }
  }
}
