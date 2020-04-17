/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example1
Input: [3,0,1]
Output: 2

Example2
Input: [9,6,4,2,3,5,7,0,1]
Output: 8

URL: https://medium.com/javascript-in-plain-english/apple-online-assessment-junior-developer-2717002043da
*/

function findMissingOne(arr) {
    const len = arr.length
    let checkArr = new Array(len)
    checkArr.fill(false)

    arr.map(val => {
        checkArr[val] = true
    })

    return checkArr.findIndex(v => v === false)
}

console.log(findMissingOne([9, 6, 4, 2, 3, 5, 7, 0, 1])) // 8
console.log(findMissingOne([3, 0, 1])) // 2