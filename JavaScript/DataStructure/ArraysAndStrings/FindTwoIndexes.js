/*
매일프로그래밍(https://mailprogramming.com/subscribe)

정수 배열과 타겟 숫자가 주어지면, 합이 타겟값이 되는 두 원소의 인덱스를 찾으시오.
단, 시간복잡도 O(n) 여야 합니다.

Given an array of integers and a target integer, find two indexes of the array element that sums to the target number.

예제)
Input: [2, 5, 6, 1, 10], 타겟 8
Output: [0, 2] // 배열[0] + 배열[2] = 8
 */

const findTwoIndexex = (arr, target) => {
	const max = Math.max(...arr)
	let sortedArr = new Array(max).fill(null)

	arr.map((n, idx) => {
		sortedArr[n] = n
	})

	sortedArr = sortedArr.filter(n => n != null).filter(n => n < target)

	let idx = 0
	let jdx = sortedArr.length - 1

	while (true) {
		if (idx === jdx) {
			idx = 0
			jdx = jdx--
			continue
		}

		let sum = sortedArr[idx] + sortedArr[jdx]

		if (sum < target) {
			idx++
			continue
		}

		if (sum === target) break
	}

	const firstElem = sortedArr[idx]
	const secondElem = sortedArr[jdx]

	return [arr.indexOf(firstElem), arr.indexOf(secondElem)]
}

const arr = [2, 5, 6, 1, 10]
const target= 8

console.log(findTwoIndexex(arr, target))
