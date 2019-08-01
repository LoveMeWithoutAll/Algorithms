/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/equality-in-a-array/problem
 */

function equalizeArray(arr) {
	let cntArr = new Array(100).fill(0)

	for (let idx = 0; idx < arr.length; idx++) {
		cntArr[arr[idx] - 1]++
	}

	const max = Math.max.apply(null, cntArr)

	return arr.length - max
}

const arr = [79, 24, 24, 24, 24, 24, 79, 79, 79, 79, 79, 24, 79, 24, 24, 79, 79, 79, 79, 24, 24, 24, 79, 24, 24, 24, 24, 79, 79, 79, 79, 24, 24, 79, 24, 79, 79, 79, 79, 24, 79, 24, 79, 24, 79, 79, 79, 79]

console.log(equalizeArray(arr)) // 21
