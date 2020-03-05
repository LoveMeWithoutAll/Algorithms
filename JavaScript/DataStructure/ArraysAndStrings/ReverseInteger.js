/*
* Reverse Integer
* URL: https://leetcode.com/problems/reverse-integer/
* Description: Given a 32-bit signed integer, reverse digits of an integer.
* Example 1:
 Input: 123
 Output: 321
* Example 2:
 Input: -123
 Output: -321
* Example 3:
 Input: 120
 Output: 21
* Note: Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isPlus = x > -1 ? true : false
    if (isOverflow(x)) return 0
    if (!isPlus) x = -1 * x

    const arrX = Array.from(x.toString())
    if (arrX.length === 1) return x

    let idx = 0
    let jdx = arrX.length - 1

    while (true) {
        if (idx >= jdx) break;
        [arrX[idx], arrX[jdx]] = [arrX[jdx], arrX[idx]]
        idx++
        jdx--
    }

    x = parseInt(arrX.join(''))
    if (!isPlus) x = x * -1

    if (isOverflow(x)) return 0

    return x
};

const isOverflow = x => {
    const isPlus = x > -1 ? true : false
    if (isPlus) {
        if (x > Math.pow(2, 31) - 1) return true
    } else {
        if (x < -1 * Math.pow(2, 31)) return true
    }
    return false
}

// console.log(reverse(123)) // 321
console.log(reverse(1534236469)) // 0