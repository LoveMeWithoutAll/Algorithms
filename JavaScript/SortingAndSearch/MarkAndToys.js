/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/mark-and-toys/problem
 */

function maximumToys(prices, k) {
	let maxNum = 0
	let maxPrice = 0
	let sortedArr = prices.map(Number).sort((a, b) => a - b)
	sortedArr.map(n => {
		maxPrice += n
		if (maxPrice > k) {
			return
		}
		maxNum++
	})
	return maxNum
}
