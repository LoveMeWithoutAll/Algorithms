/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/electronics-shop/problem
 */

function getMoneySpent(keyboards, drives, b) {
	/*
	 * Write your code here.
	 */
	const sortedKeys = keyboards.filter(v => b >= v).sort((a, b) => a - b)
	const sortedDrives = drives.filter(v => b => v).sort((a, b) => a - b)
	const getMaximum = (a, b, budget) => {
		const aLen = a.length
		const bLen = b.length
		let max = 0
		for (let idx = aLen - 1; idx >= 0; idx--) {
			for (let jdx = bLen - 1; jdx >= 0; jdx--) {
				let currentSum = a[idx] + b[jdx]
				if (currentSum === budget) return currentSum
				if (currentSum < budget) max = Math.max(max, currentSum)
			}
		}
		return max === 0 ? -1 : max
	}

	return getMaximum(sortedDrives, sortedKeys, b)
}

const budget = 10
const a = [3, 1]
const b = [5, 2 , 8]

console.log(getMoneySpent(a, b, budget))
