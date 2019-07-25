/**
 * Hacker rank challenge
 * URL: https://www.hackerrank.com/challenges/ctci-bubble-sort/problem
 */

function countSwaps(a) {
	let swapCnt = 0

	const swap = (h, t) => {
		swapCnt++

		let j = a.indexOf(h)

		let tmp;
		tmp = h
		h = t
		t = tmp

		a[j] = h
		a[j + 1] = t
	}

	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < a.length - 1; j++) {
			// Swap adjacent elements if they are in decreasing order
			if (a[j] > a[j + 1]) {
				swap(a[j], a[j + 1]);
			}
		}
	}

	console.log(`Array is sorted in ${swapCnt} swaps.`)
	console.log(`First Element: ${a[0]}`)
	console.log(`Last Element: ${a[a.length - 1]}`)
}
