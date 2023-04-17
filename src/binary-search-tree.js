const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const node = this.rootNode;
    if (node === null) {
      this.rootNode = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  has(data) {
    const node = this.rootNode;
    if (node === null) {
      return false;
    } else {
      const searchTree = function (node) {
        if (data === node.data) {
          return true;
        } else if (data < node.data) {
          if (node.left === null) {
            return false;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            return false;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        }
      };
      return searchTree(node);
    }
  }

  find(data) {
    const node = this.rootNode;
    if (node === null) {
      return null;
    } else {
      const searchTree = function (node) {
        if (data === node.data) {
          return node;
        } else if (data < node.data) {
          if (node.left === null) {
            return null;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            return null;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        }
      };
      return searchTree(node);
    }
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    if (!this._root) return null;
    let node = this._root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }
  max() {
    if (!this._root) return null;
    let node = this._root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};