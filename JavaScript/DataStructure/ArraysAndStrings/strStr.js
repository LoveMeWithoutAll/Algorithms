/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
 Input: haystack = "hello", needle = "ll"
 Output: 2
Example 2:
 Input: haystack = "aaaaa", needle = "bba"
 Output: -1

 Clarification:
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

Reference: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') return 0
    const re = new RegExp(needle)

    const reArr = re.exec(haystack)
    return reArr ? reArr.index : -1
};

console.log(strStr('hello', 'll')) // 2
console.log(strStr('aaaaa', 'bba')) // -1