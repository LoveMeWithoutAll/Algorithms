/*
Given an integer n, return true if it is a power of three. Otherwise, return false.
An integer n is a power of three, if there exists an integer x such that n == 3x.

Example 1:
    Input: n = 27
    Output: true

Example 2:
    Input: n = 0
    Output: false

Example 3:
    Input: n = 9
    Output: true

Example 4:
    Input: n = 45
    Output: false


Constraints:
    -231 <= n <= 231 - 1

Reference: https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/745/
*/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree0 = function(n) {
    if (n === 0) return false
    if (n === 1) return true
    if (n % 3 === 0) {
        return isPowerOfThree(Math.floor(n/3))
    } else {
        return false
    }
};

console.log(isPowerOfThree(9)) // true
