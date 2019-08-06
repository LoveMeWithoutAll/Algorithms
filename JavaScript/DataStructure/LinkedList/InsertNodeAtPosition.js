/*
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem
 * 
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function SinglyLinkedList (val) {
	this.data = val
	this.next = null
}

let node0 = new SinglyLinkedList(0)
let node1 = new SinglyLinkedList(1)
let node2 = new SinglyLinkedList(2)
let node3 = new SinglyLinkedList(3)

node0.next = node1
node1.next = node2
node2.next = node3

function insertNodeAtPosition(head, data, position) {
	let newNode = new SinglyLinkedList()
	newNode.data = data

	if (position === 0) {
		newNode.next = head
		return newNode
	}

	const getNode = (head, position) => {
		if (position === 0) return head
		return getNode(head.next, position - 1)
	}

	newNode.next = getNode(head, position)

	getNode(head, position - 1).next = newNode

	return head
}

let head = insertNodeAtPosition(node0, 4, 2)
console.log(head) // 0 1 4 2 3
