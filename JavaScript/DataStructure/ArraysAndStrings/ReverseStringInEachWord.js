/*
주어진 string 에 모든 단어를 거꾸로 하시오.

Reverse all the words in the given string.

예제)
Input: “abc 123 apple”
Output: “cba 321 elppa”

Reference: mailprogramming.com
*/

function ReverseString (str) {
    const arr1 = str.split('')
    let reverseAll = ''

    for (let idx = str.length - 1; idx > -1; idx--) {
        reverseAll += arr1[idx]
    }

    const arr2 = reverseAll.split(' ')
    let result = ''

    for (let idx = arr2.length - 1; idx > -1; idx--) {
        result += ` ${arr2[idx]}`
    }

    return result.trim()
}

const str = 'abc 123 apple'

console.log(ReverseString(str))
