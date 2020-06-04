/*
The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.
Note: Each term of the sequence of integers will be represented as a string.

Example 1:
Input: 1
Output: "1"
Explanation: This is the base case.

Example 2:
Input: 4
Output: "1211"
Explanation: For n = 3 the term was "21" in which we have two groups "2" and "1", "2" can be read as "12" which means frequency = 1 and value = 2, the same way "1" is read as "11", so the answer is the concatenation of "12" and "11" which is "1211".

I will list out the first 10 terms to help visualize the sequence:

 1.     1
 2.     11
 3.     21
 4.     1211
 5.     111221
 6.     312211
 7.     13112221
 8.     1113213211
 9.     31131211131221
10.     13211311123113112211

Reference1: https://medium.com/javascript-in-plain-english/apple-online-assessment-junior-developer-2717002043da
Reference2: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/886/
*/

/**
 * @param {number} n
 * @return {string}
 */
function CountAndSaySequenceByRecursive(nth) {
    if (nth === 1) return '1'
    if (nth === 2) return '11'

    const lastStr = CountAndSaySequenceByRecursive(nth - 1)
    let occurence = 0
    let accumulator = ''
    for (let idx = 0; idx < lastStr.length - 1; idx++) {
        const head = lastStr.charAt(idx)
        const tail = lastStr.charAt(idx + 1)
        if (head === tail) {
            occurence++
            if (idx + 1 === lastStr.length - 1) {
                occurence++
                accumulator += occurence
                accumulator += head
            }
        } else {
            occurence++
            accumulator += occurence
            accumulator += head
            occurence = 0
            if (idx + 1 === lastStr.length - 1) {
                accumulator += '1'
                accumulator += tail
            }
        }
    }

    return accumulator
}

console.log(CountAndSaySequenceByRecursive(2)) // 11
console.log(CountAndSaySequenceByRecursive(3)) // 21
console.log(CountAndSaySequenceByRecursive(4)) // 1211
console.log(CountAndSaySequenceByRecursive(5)) // 111221
console.log(CountAndSaySequenceByRecursive(7)) // 13112221
console.log(CountAndSaySequenceByRecursive(9)) // 31131211131221