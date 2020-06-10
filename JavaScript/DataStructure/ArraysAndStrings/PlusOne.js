/*
Plus One

Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:
 Input: [1,2,3]
 Output: [1,2,4]
 Explanation: The array represents the integer 123.

Example 2:
 Input: [4,3,2,1]
 Output: [4,3,2,2]
 Explanation: The array represents the integer 4321.

Reference: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const len = digits.length
    let largerThan10 = true
    let returnArr = []

    digits[len - 1] = digits[len - 1] + 1
    if (digits[len - 1] < 10) return digits

    returnArr.push(0)
    for (let idx = len - 2; idx > -1; idx--) {
        const pointer = digits[idx]
        if (largerThan10) {
            const increased = pointer + 1
            if (increased === 10) {
                largerThan10 = true
                returnArr.push(0)
            } else {
                largerThan10 = false
                returnArr.push(increased)
            }
        } else {
            returnArr.push(pointer)
        }
    }

    if (returnArr[len - 1] === 0) {
        returnArr.push(1)
    }

    return returnArr.reverse()
};

console.log(plusOne([1, 2, 3])) // [1,2,4]
console.log(plusOne([4, 3, 2, 1])) // [4,3,2,2]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])) // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
console.log(plusOne([9])) // [1, 0]