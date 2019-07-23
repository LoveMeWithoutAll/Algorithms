/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/between-two-sets/problem
 */

function getTotalX(a, b) {
    // Write your code here
    const getMultiples = arr => {
        const lengthOfArr = arr.length
        const maxValue = Math.max.apply(null, arr)
        let multiples = []
        for (let idx = maxValue; idx < 101; idx++) {
            let filterd = arr.filter(n => idx % n === 0)
            if (filterd.length === lengthOfArr) multiples.push(idx)
        }
        return multiples
    }

    const getDivisors = arr => {
        const lengthOfArr = arr.length
        const minValue = Math.min.apply(null, arr)
        let divisors = []
        for (let idx = 1; idx <= minValue; idx++) {
            let filtered = arr.filter(n => {
                return n % idx === 0
            })
            if (filtered.length === lengthOfArr) divisors.push(idx)
        }
        return divisors
    }

    let multiples = getMultiples(a)
    let divisors = getDivisors(b)

    let commons = multiples.filter(n => {
        return divisors.find(v => n === v) != undefined
    })

    return commons.length
}

const a = [2, 4]
const b = [16,32, 96]

console.log(getTotalX(a, b))
