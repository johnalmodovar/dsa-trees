"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */
  sumValues() {
    // pick a node and call this on a node
    // go through the node and its children
    // add all of their values together and return it

    let sum = 0;
    let nodesToAdd = [this];

    while (nodesToAdd.length) {
      let current = nodesToAdd.pop();
      sum += current.val;

      for (let child of current.children) {
        nodesToAdd.push(child);
      }
    }

    return sum;
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {
    let evenCount = 0;
    let nodesToCheck = [this];

    while (nodesToCheck.length) {
      let current = nodesToCheck.pop();
      if(current.val % 2 === 0) {
        evenCount++;
      }
      for(let child of current.children) {
        nodesToCheck.push(child);
      }
    }

    return evenCount;
  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound) {
    let greaterCount = 0;
    let nodesToCheck = [this];

    while (nodesToCheck.length) {
      let current = nodesToCheck.pop();
      if(current.val > lowerBound) {
        greaterCount++;
      }
      for(let child of current.children) {
        nodesToCheck.push(child);
      }
    }

    return greaterCount;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    if (this.root === null) return 0;

    return this.root.sumValues();
  }
  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    if (this.root === null) return 0;

    return this.root.countEvens();
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    if (this.root === null) return 0;

    return this.root.numGreater(lowerBound);
  }
}

module.exports = { Tree, TreeNode };
