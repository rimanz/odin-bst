import Queue from "./queue.js";

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

  insert(value) {
    if (this.includes(value)) return;

    let current = this.root;
    while (current) {
      if (value < current.data && current.left !== null) {
        current = current.left;
      } else if (value > current.data && current.right !== null) {
        current = current.right;
      } else {
        break;
      }
    }

    if (value < current.data) {
      current.left = new Node(value);
    } else {
      current.right = new Node(value);
    }
  }

  delete(value) {
    if (!this.includes(value)) return;

    // Find out node to delete and it's parent
    let current = this.root;
    let parent = null;

    while (current && current.data !== value) {
      if (value < current.data && current.left) {
        parent = current;
        current = current.left;
      } else if (value > current.data && current.right) {
        parent = current;
        current = current.right;
      } else {
        break;
      }
    }

    // when both sides are null
    if (current.left === null && current.right === null) {
      if (parent.left === current) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }

    // when one side is null
    if (current.left === null || current.right === null) {
      const temp = current.left ? current.left : current.right;

      if (parent.left === current) {
        parent.left = temp;
      } else {
        parent.right = temp;
      }
    }

    // None of the sides are null
    if (current.left && current.right) {
      // Finding the successor node and it's parent
      let successor = current.right;
      let successorParent = null;

      while (successor.left) {
        successorParent = successor;
        successor = successor.left;
      }

      // remove successor form it's place
      successorParent.left = successor.right;

      // replace current's value with successor's value
      current.data = successor.data;
    }
  }

  levelOrderForEach(callback) {
    if (!callback) {
      throw new Error("A callback is required!");
    }

    const queue = new Queue();
    queue.enqueue(this.root);

    let current = queue.peek();
    while (current) {
      if (current.left) queue.enqueue(current.left);
      if (current.right) queue.enqueue(current.right);

      callback(current.data);

      queue.dequeue();
      current = queue.peek();
    }
  }

  inOrderForEach(callback, root = this.root) {
    if (!callback) {
      throw new Error("A callback is required!");
    }

    let current = root;

    if (current.left) {
      this.inOrderForEach(callback, current.left);
    }

    callback(current.data);

    if (current.right) {
      this.inOrderForEach(callback, current.right);
    }
  }

  preOrderForEach(callback, root = this.root) {
    if (!callback) {
      throw new Error("A callback is required!");
    }

    let current = root;

    callback(current.data);

    if (current.left) {
      this.preOrderForEach(callback, current.left);
    }

    if (current.right) {
      this.preOrderForEach(callback, current.right);
    }
  }

  postOrderForEach(callback, root = this.root) {
    if (!callback) {
      throw new Error("A callback is required!");
    }

    let current = root;

    if (current.left) {
      this.postOrderForEach(callback, current.left);
    }

    if (current.right) {
      this.postOrderForEach(callback, current.right);
    }

    callback(current.data);
  }
}
