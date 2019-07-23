/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/plus-minus/problem
 */

function plusMinus(arr) {
    const len = arr.length
    const positives = arr.filter(n => n > 0)
    const negatives = arr.filter(n => n < 0)
    const zeros = arr.filter(n => n === 0)

    console.log((positives.length / len).toFixed(6))
    console.log((negatives.length / len).toFixed(6))
    console.log((zeros.length / len).toFixed(6))
}

plusMinus([-4, 3, -9, 0, 4, 1])
