/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/staircase/problem
 */

function staircase(n) {
    let symbolNum = 1
    let spaceNum = n -1
    const space = ' '

    while (true) {
        if (spaceNum < 0) return
        console.log(space.repeat(spaceNum) + '#'.repeat(symbolNum))
        symbolNum++
        spaceNum--
    }
}

staircase(6)
