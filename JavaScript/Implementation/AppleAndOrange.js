/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/apple-and-orange/problem
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let appleNum = 0
    let orangeNum = 0

    apples
        .filter(v => a + v >= s)
        .filter(v => a + v <= t)
        .map(v => appleNum++)


    oranges
        .filter(v => b + v >= s)
        .filter(v => b + v <= t)
        .map(v => orangeNum++)

    console.log(appleNum)
    console.log(orangeNum)
}
