/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
  The left subtree of a node contains only nodes with keys less than the node's key.
  The right subtree of a node contains only nodes with keys greater than the node's key.
  Both the left and right subtrees must also be binary search trees.

Example 1
  Input: root = [2,1,3]
  Output: true

Example 2
  Input: root = [5,1,4,null,null,3,6]
  Output: false
  Explanation: The root node's value is 5 but its right child's value is 4.

Constraints:
  The number of nodes in the tree is in the range [1, 104].
  -231 <= Node.val <= 231 - 1

Reference: https://leetcode.com/problems/validate-binary-search-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// solution: https://leetcode.com/problems/validate-binary-search-tree/discuss/32117/My-JavaScript-solution
var isValidBST = function (root) {
  if (!root) {
    return true; // Sanity check for passing test case '[]'
  }

  function helper(root, min, max) {
    if (!root) {
      return true; // We hit the end of the path
    }

    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
      return false; // current node's val doesn't satisfy the BST rules
    }

    // Continue to scan left and right
    return helper(root.left, min, root.val) && helper(root.right, root.val, max);
  }

  return helper(root, null, null);
};

console.log(isValidBST(new TreeNode(2, new TreeNode(1, null, null), new TreeNode(3, null, null)))) // true
