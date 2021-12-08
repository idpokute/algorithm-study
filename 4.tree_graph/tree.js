function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 0;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;

    let newNode = new Node(value);

    const searchTree = (node) => {
      if (value < node.value) {
        if (!node.left) node.left = newNode;
        else searchTree(node.left);
      } else if (value > node.value) {
        if (!node.right) node.right = newNode;
        else searchTree(node.right);
      }
    };
    searchTree(this.root);
  }

  min() {
    let curr = this.root;
    while (curr.left) {
      curr = curr.left;
    }
    return curr;
  }

  max() {
    let curr = this.right;
    while (curr.right) {
      curr = curr.right;
    }
    return curr;
  }

  contains() {}

  // dfs

  // in-order

  // pre-order

  // post-order

  add(value) {
    const node = this.root;

    if (node === null) {
      this.root = new Node(value);
      return;
    } else {
      const searchTree = function (root) {
        if (value < root.value) {
          if (root.left === null) {
            root.left = new Node(value);
            return;
          } else {
            return searchTree(root.left);
          }
        } else if (value > root.value) {
          if (root.right === null) {
            root.right = new Node(value);
            return;
          } else {
            return searchTree(root.right);
          }
        } else {
          return null;
        }
      };
      searchTree(this.root);
    }
  }
  // return the tree
  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) return null;

      if (data < node.value) {
        node.left = removeNode(node.left, data);
      } else if (data > node.value) {
        node.right = removeNode(node.right, data);
      } else if (data === node.value) {
        if (node.left === null && node.right === null) {
          return null;
        } else if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }

        let tmp = node.right;
      }
    };

    this.root = removeNode(this.root, data);
  }
}

let tree = new BSTree();
tree.add(3);
console.log(tree);
tree.add(4);
tree.add(1);
tree.add(2);
console.log(tree);
