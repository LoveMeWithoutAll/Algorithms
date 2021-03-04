/*
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Constraints
  * The number of nodes in the tree is in the range [0, 104].
  * -100 <= Node.val <= 100

Example
  1.
    Input: root = [3,9,20,null,null,15,7]
    Output: 3
  2. 
    Input: root = [1,null,2]
    Output: 2
  3. 
    Input: root = []
    Output: 0
  4.
    Input: root = [0]
    Output: 1

Reference: https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/555/
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
 * @return {number}
 */
var maxDepth = function (root) {
  let nodeArr = [{
    node: root,
    depth: 1
  }]
  let currentNode = nodeArr.pop()
  let max = 0

  while (currentNode && currentNode.node)  {
    const node = currentNode.node
    const depth = currentNode.depth

    if (depth > max) max = depth
    
    if (node.left !== null) {
      nodeArr = [...nodeArr, {
        node: node.left,
        depth: depth + 1
      }]
    }
    if (node.right !== null) {
      nodeArr = [...nodeArr, {
        node: node.right,
        depth: depth + 1
      }]
    }

    currentNode = nodeArr.pop()
  }

  return max
};

console.log(maxDepth([3, 9, 20, null, null, 15, 7])) // 3
console.log(maxDepth([1, null, 2])) // 2
console.log(maxDepth([])) // 0
console.log(maxDepth([0])) // 1
