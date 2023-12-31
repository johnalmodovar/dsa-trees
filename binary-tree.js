"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {
    // breadth search
    // counter variable to keep track of what level we are on (start at 1)
    // check if the current node has a left and a right
    // if it does, return true, if not, return false
    let nodesToCheck = [this];
    let level = 1;

    while (nodesToCheck.length) {
      let current = nodesToCheck.shift();

      if (current.right === null || current.left === null) {
        return level;
      }

      level++;
      nodesToCheck.push(current.left);
      nodesToCheck.push(current.right);
    }

  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {
    // DFS
    // have a counter to check the level
    // have a container for our nodes
    // start our loop
    // check if both left and right are null
    // if it is, return level

    let nodesToCheck = [this];
    let level = 1;

    while (nodesToCheck.length) {
      let current = nodesToCheck.pop();

      if (current.left === null && current.right === null) {
        return level;
      }

      level++;
      if (current.left) nodesToCheck.push(current.left);
      if (current.right) nodesToCheck.push(current.right);
    }
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
  minDepth() {

  }

  /** nextLarger(lowerBound): return the smallest value from the invoking node
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    if (this.root === null) return 0;

    return this.root.minDepthToIncompleteNode();
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    if (this.root === null) return 0;

    let leftLevel = 1;
    let rightLevel = 1;
    let rootLeft = this.root.left;
    let rootRight=this.root.right;

      if(rootLeft) {
        leftLevel = rootLeft.maxDepth();
        // rootLeft = rootLeft.left;
      }

      if (rootRight) {
        rightLevel = rootLeft.maxDepth();
        if(rootRight.right) {
          rootRight
          rightLevel = rootRight.maxDepth();
        }
        if( r) {

        }
        // rootRight = rootRight.right;
      }

    if (leftLevel > rightLevel) {
      return leftLevel;
    }

    return rightLevel;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
