/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Reference: https://leetcode.com/problems/add-two-numbers/
*/
/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let pointer = new ListNode(0)
  let prev = new ListNode(0, pointer)
  let isMore = false
  
  while (l1 || l2) {
    let l1val = getVal(l1)
    let l2val = getVal(l2)  

    let sum = l1val + l2val
    if (isMore) sum++

    if (sum > 9) {
      sum -= 10
      isMore = true
    } else {
      isMore = false
    }

    const newNode = new ListNode(sum)
    pointer.next = newNode

    l1 = l1?.next
    l2 = l2?.next
    pointer = pointer.next
  }

  if (isMore) pointer.next = new ListNode(1)

  return prev.next.next
};

function getVal(node) {
  let value = 0
  if (node) {
    value = node.val
  } else {
    value = 0
  }

  return value
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const a0 = new ListNode(3)
const b0 = new ListNode(4)
const c0 = new ListNode(2)
a0.next = b0
b0.next = c0

const a1 = new ListNode(4)
const b1 = new ListNode(6)
const c1 = new ListNode(5)
a1.next = b1
b1.next = c1

const result = addTwoNumbers(a0, a1)
console.log(result) // 807
