/*
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem
 *
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function deleteNode(head, position) {

	if (position === 0) return head.next;

	const getNode = (head, position) => {
		if (position === 0) return head;
		return getNode(head.next, position - 1)
	};

	let previous = getNode(head, position - 1);
	previous.next = getNode(head, position + 1);

	return head
}

