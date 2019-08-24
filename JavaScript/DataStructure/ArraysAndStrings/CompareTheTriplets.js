/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/compare-the-triplets/problem
 */

function compareTriplets(a, b) {
    let result = [0, 0]
    for (let idx = 0; idx < a.length; idx++) {
        if (a[idx] > b[idx]) result[0] += 1
        if (a[idx] < b[idx]) result[1] += 1
    }
    return result
}
