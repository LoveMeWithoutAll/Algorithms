// Given an integer array, find the largest consecutive sum of elements.

function largestSum (arr) {
	let currentSum = 0
	let maxSum = 0

	for (let idx = 0; idx < arr.length; idx++) {
		currentSum = Math.max(currentSum + arr[idx], arr[idx])
		maxSum = Math.max(maxSum, currentSum)
	}

	return maxSum
}

const arr = [-1, 3, -1, 5]

console.log(largestSum(arr))
