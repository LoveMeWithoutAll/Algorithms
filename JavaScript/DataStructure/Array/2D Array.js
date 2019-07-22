/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/2d-array/problem
 */

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    const x = arr[0].length
    const y = arr.length
    const maxX = x - 2
    const maxY = y - 2

    if (maxX < 1 || maxY < 1) return 0

    let maxSum = -Infinity

    for (let idx = 0; idx < maxX; idx++) {
        for (let jdx = 0; jdx < maxY; jdx++) {
            let tmpSum = 0

            tmpSum += arr[idx][jdx]
            tmpSum += arr[idx][jdx+1]
            tmpSum += arr[idx][jdx+2]

            tmpSum += arr[idx+1][jdx+1]

            tmpSum += arr[idx+2][jdx]
            tmpSum += arr[idx+2][jdx+1]
            tmpSum += arr[idx+2][jdx+2]

            if (tmpSum > maxSum) maxSum = tmpSum
        }
    }

    return maxSum
}
