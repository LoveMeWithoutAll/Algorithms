/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/kangaroo/problem
 */

function kangaroo(x1, v1, x2, v2) {
    if (v1 <= v2) return 'NO'

    let k1 = x1
    let k2 = x2

    while (k2 >= k1) {
        if (k1 === k2) return 'YES'
        k1 += v1
        k2 += v2
    }

    return 'NO'
}

