/**
 * @param estimates 일자별 접속자
 * @param k 연속 일자
 * @returns {number} k일 동안 최대 접속자 수의 합 구하기
 */

function solution(estimates, k) {
    let firstKSum = 0

    for (let i = 0; i < k; i++) {
        firstKSum += estimates[i]
    }

    let currentSum = firstKSum
    let maxSum = firstKSum

    for (let i = k; i < estimates.length; i++) {
        const prevElement = estimates[i - k]
        const nextElement = estimates[i]
        const tempSum = currentSum - prevElement + nextElement

        currentSum = tempSum

        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum
}

console.log(solution([ 5, 1, 9, 8, 10, 5 ], 3))
console.log(solution([10, 1, 10, 1, 1, 4, 3, 10], 6))