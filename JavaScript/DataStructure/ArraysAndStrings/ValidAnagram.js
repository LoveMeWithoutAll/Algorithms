/*
Valid Anagram
URL: https://leetcode.com/problems/valid-anagram/

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:
 Input: s = "anagram", t = "nagaram"
 Output: true
Example 2:
 Input: s = "rat", t = "car"
 Output: false
 
Note: You may assume the string contains only lowercase alphabets.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return sortAsc(s) === sortAsc(t)
};

const sortAsc = str => str.split('').sort().join('')

console.log(isAnagram('anagram', 'nagaram')) // true
console.log(isAnagram('rat', 'car')) // false