/*
Reverse String
URL: https://leetcode.com/problems/reverse-string/
Description
 Write a function that reverses a string. The input string is given as an array of characters char[].
 Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let idx = 0
    let jdx = s.length - 1
    while (idx < s.length / 2) {
        let tmp = s[idx]
        s.splice(idx, 1, s[jdx])
        s.splice(jdx, 1, tmp)
        idx++
        jdx--
    }
};

const s = ["h", "e", "l", "l", "o"]

reverseString(s)
console.log(s)