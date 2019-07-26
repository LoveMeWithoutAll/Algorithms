/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/mini-max-sum/problem
 */

function miniMaxSum(arr) {
	const sorted = arr.map(Number).sort((a, b) => a - b)
	const mins = sorted.slice(0, 4)
	const maxs = sorted.slice(sorted.length - 4)

	const reducer = (accumulator, currentor) => accumulator + currentor

	const minSum = mins.reduce(reducer)
	const maxSum = maxs.reduce(reducer)

	console.log(minSum, maxSum)
}

const arr = [501893267, 649027153, 379408215, 452968170, 487530619]

miniMaxSum(arr)