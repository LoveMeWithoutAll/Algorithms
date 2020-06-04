/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog","racecar","car"]
Output: ""

Explanation: There is no common prefix among the input strings.

Note:
All given inputs are in lowercase letters a-z.

Reference: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const minLenElement = getMinLenElement(strs)
    let accumulator = minLenElement

    while (true) {
        let flag = true
        strs.forEach(v => {
            const re = new RegExp("^" + accumulator)
            if (!re.test(v)) {
                flag = false
            }
        })

        if (flag) {
            break
        } else {
            accumulator = accumulator.slice(0, -1)
        }
    }

    return accumulator
};

const getMinLenElement = arr => {
    let minLen = Number.MAX_SAFE_INTEGER
    let minLenElement = ''
    arr.forEach(element => {
        const len = element.length
        if (len < minLen) {
            minLen = len
            minLenElement = element
        }
    })
    return minLenElement
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])) // fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])) // ''