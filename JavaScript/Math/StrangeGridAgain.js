/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/strange-grid/problem
 */

function strangeGrid(r, c) {
    let largeN;
    let smallN;

    /*
    if ( r in (1, 2)) largeN = 0
    if ( r in (3, 4)) largeN = 1
    if ( r in (5, 6)) largeN = 2

    if ( r / 2 == 0 | 1) largeN = 0
    if ( r / 2 == 1 | 2) largeN = 1
    if ( r / 2 == 2 | 3) largeN = 2

    if ( r+1 / 2 == 1) largeN = 0
    if ( r+1 / 2 == 2) largeN = 1
    if ( r+1 / 2 == 3) largeN = 2
    */

    largeN = Math.floor((r + 1) / 2 - 1)
    console.log('largeN', largeN)

    const isOdd = r % 2 !== 0

    smallN = isOdd ? c * 2 - 2 : c * 2 - 1

    return largeN * 10 + smallN
}
