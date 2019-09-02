/*
매일프로그래밍(https://mailprogramming.com/subscribe)

정수 배열(int array)이 주어지면 두번째로 큰 값을 프린트하시오.

Given an integer array, find the second largest element.

예제)
Input: [10, 5, 4, 3, -1]
Output: 5

Input: [3, 3, 3]
Output: Does not exist.
 */

const getSecondMax = arr => {

	const touchedArr = Array.from(new Set(arr)).sort((a, b) => b - a)

	if (touchedArr.length > 1) {
		return touchedArr[1]
	} else {
		return 'Does not exist.'
	}

	return touchedArr
}

const arr0 = [10, 5, 4, 3, -1]
console.log(getSecondMax(arr0))

const arr1 = [3, 3, 3]
console.log(getSecondMax(arr1))
