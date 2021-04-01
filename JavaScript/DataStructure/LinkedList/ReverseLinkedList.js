/*
Reverse Linked List

  Given the head of a singly linked list, reverse the list, and return the reversed list.
  
  Example1
    Input: head = [1,2,3,4,5]
    Output: [5,4,3,2,1]
  
  Example2
    Input: head = [1,2]
    Output: [2,1]

  Example 3:
    Input: head = []
    Output: []

  Constraints:
    The number of nodes in the list is the range [0, 5000].
    -5000 <= Node.val <= 5000

Reference: https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let arr = []
  if (!head) return null
  while (true) {
    arr.push(head.val)
    if (head.next) {
      head = head.next
    } else {
      break
    }
  }

  const reversed = arr.reverse()
  let reversedNode = []
  reversed.forEach(v => {
    reversedNode.push(new ListNode(v))
  })

  for (let idx = 0; idx < reversedNode.length; idx++) {
    let nextNode = null
    if (idx + 1 !== reversedNode.length) nextNode = reversedNode[idx + 1]
    reversedNode[idx].next = nextNode
  }

  return reversedNode[0]
};

function ListNode(val = 0, next = null) {
  this.val = val
  this.next = next
}

let node0 = new ListNode(0)
let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)

node0.next = node1
node1.next = node2
node2.next = node3
node3.next = node4

const result = reverseList(node0)
console.log(result)