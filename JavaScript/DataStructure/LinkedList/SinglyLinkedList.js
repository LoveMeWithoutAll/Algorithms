// singly linked list

function ListNode(val) {
	this.val = val
	this.next = null
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

console.log(node0)
