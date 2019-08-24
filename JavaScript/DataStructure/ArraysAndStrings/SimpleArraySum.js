/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/simple-array-sum/problem
 */

function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    let sum = 0;

    ar.map(n => {
        sum += n
    })

    return sum
}
