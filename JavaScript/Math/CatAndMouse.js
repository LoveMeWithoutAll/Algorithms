/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
 */

function catAndMouse(x, y, z) {
	const distWithA = Math.abs(z-x)
	const distWithB = Math.abs(z-y)

	if (distWithA > distWithB) {
		return 'Cat B'
	} else if (distWithA < distWithB) {
		return 'Cat A'
	} else {
		return 'Mouse C'
	}
}

console.log(catAndMouse(1, 2, 3)) // Cat B
console.log(catAndMouse(1, 3, 2)) // Mouse C
