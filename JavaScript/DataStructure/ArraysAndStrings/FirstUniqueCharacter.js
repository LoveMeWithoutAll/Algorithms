/*
First Unique Character in a String
URL: https://leetcode.com/problems/first-unique-character-in-a-string/
Description: Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
Note: You may assume the string contain only lowercase letters.
Examples:
 s = "leetcode"
 return 0.

 s = "loveleetcode",
 return 2.
*/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (s.length < 1) return -1
    if (s.length === 1) return 0
    const arr = Array.from(s)
    for (let idx = 0; idx < arr.length; idx++) {
        const pointer = arr[idx]
        if (arr.indexOf(pointer) === arr.lastIndexOf(pointer)) {
            return idx
        }
    }
    return -1
};

// console.log(firstUniqChar('leetcode')) // 0
// console.log(firstUniqChar('z')) // 0