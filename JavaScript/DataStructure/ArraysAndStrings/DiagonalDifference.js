/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/diagonal-difference/problem
 */

function diagonalDifference(arr) {
    // Write your code here
    const len = arr.length
    let toRightDown = 0
    let toLeftDown = 0

    for (let idx = 0; idx < len; idx++) {
        toRightDown += arr[idx][idx]
    }

    for (let idx = 0; idx < len; idx++) {
        let jdx = len - 1 - idx
        toLeftDown += arr[idx][jdx]
    }

    if (toRightDown > toLeftDown) return Math.abs(toRightDown - toLeftDown);
    if (toLeftDown > toRightDown) return Math.abs(toLeftDown - toRightDown);
    if (toLeftDown === toRightDown) return 0;
}
