/*
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function insertNodeAtHead(head, data) {
    let newNode = new SinglyLinkedList()
    newNode.data = data
    newNode.next = head
    return newNode
}