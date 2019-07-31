/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
 */

function jumpingOnClouds(c) {
	let jumps = 0
	let idx = 0
	let destination = c.length - 1

	do {
		if (c[idx + 2] === 0) {
			idx += 2
		} else {
			idx++
		}
		jumps++
	}
	while (idx < destination)

	return jumps
}

const c = [0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0]

console.log(jumpingOnClouds(c)) // 46
