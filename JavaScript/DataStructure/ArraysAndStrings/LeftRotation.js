/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
 */

function rotLeft(a, d) {
    let tmpArr = []
    let slicedArr = []

    for (let idx = 0; idx < d; idx++) {
        tmpArr.push(a[idx])
    }

    slicedArr = a.slice(d, a.length)

    return slicedArr.concat(tmpArr)
}

const a = [1, 2, 3, 4, 5]
const b = 4

console.log(rotLeft(a, b))

