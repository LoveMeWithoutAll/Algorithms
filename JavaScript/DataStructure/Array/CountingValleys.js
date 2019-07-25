/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/counting-valleys/problem
 */

function countingValleys(n, s) {
	const arr = s.split('')
	let cnt = 0
	let altitude = 0

	for (let idx = 0; idx < n; idx++) {
		const pointer = arr[idx]
		if (pointer === 'U') altitude++
		if (pointer === 'D') altitude--
		if (altitude === 0 && pointer === 'U') cnt++
	}

	return cnt
}
