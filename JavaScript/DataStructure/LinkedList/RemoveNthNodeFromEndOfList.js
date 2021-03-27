/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    if (!head) return null
    
    const getLength = (head) => {
        let length = 0
        while (head) {
            length++
            head = head.next
        }
        return length
    }

    const deleteTargetNode = (head, targetIdx) => {
        if (targetIdx === 0) return head.next

        let idx = 0
        let pointer = {...head}
        
        while (idx <= targetIdx) {
            const nextNext = pointer.next?.next
            if (!nextNext) { // case end of node
                pointer.next = null
                break
            } else if (idx === targetIdx-1) {
                pointer.next = nextNext
                break
            }
            pointer = pointer.next
            idx++
        }

        if (idx === 0) head = pointer // case remove head of node

        return head
    }

    const length = getLength(head)
    
    if (length === 1 && n === 1) return null // case remove 1th of only 1 node => null
    
    const targetIdx = length - n
    const result = deleteTargetNode(head, targetIdx)

    return result
};

function ListNode(val = 0) {
    this.val = val
    this.next = null
}



// 0. remove 1th of only 1 node
const node00 = new ListNode(0)
const result0 = removeNthFromEnd(node00, 1)
console.log(result0) // null

// 1. remove 1th from end of list
const node10 = new ListNode(0)
const node11 = new ListNode(1)
const node12 = new ListNode(2)

node10.next = node11
node11.next = node12
const result1 = removeNthFromEnd(node10, 1)
console.log(result1)

// 2. remove 2th from end of list
const node20 = new ListNode(0)
const node21 = new ListNode(1)
const node22 = new ListNode(2)

node20.next = node21
node21.next = node22

const result2 = removeNthFromEnd(node20, 2)
console.log(result2)

// 3. remove head node
const node30 = new ListNode(0)
const node31 = new ListNode(1)
const node32 = new ListNode(2)

node30.next = node31
node31.next = node32

const result3 = removeNthFromEnd(node30, 3)
console.log(result3)