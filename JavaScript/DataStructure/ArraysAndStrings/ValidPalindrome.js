/*
* Valid Palindrome
* URL: https://leetcode.com/problems/valid-palindrome/
* Description: Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
* Note: For the purpose of this problem, we define empty string as valid palindrome.
* Example 1:
 Input: "A man, a plan, a canal: Panama"
 Output: true
* Example 2:
 Input: "race a car"
 Output: false

*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const regexp = /[^A-Za-z0-9]+/g
    const alphanumericS = Array.from(s.replace(regexp, "").toLowerCase())

    while (true) {
        if (alphanumericS.length < 2) return true
        if (alphanumericS.shift() !== alphanumericS.pop()) {
            return false
        }
    }
};

console.log(isPalindrome("A man, a plan, a canal: Panama")) // true