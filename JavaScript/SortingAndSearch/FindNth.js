/*
매일프로그래밍(https://mailprogramming.com/subscribe)

정수 배열(int array)과 정수 N이 주어지면, N번째로 큰 배열 원소를 찾으시오.
Given an integer array and integer N, find the Nth largest element in the array.

예제)
Input: [-1, 3, -1, 5, 4], 2
Output: 4

Input: [2, 4, -2, -3, 8], 1
Output: 8

Input: [-5, -3, 1], 3
Output: -5
 */

function findNth (arr, n) {
	let sortedArr = arr.sort((a, b) => b - a);

	return sortedArr[n - 1]
}

console.log(findNth([-5, -3, 1], 3)); // -5
console.log(findNth([2, 4, -2, -3, 8], 1)); // 8
console.log(findNth([-1, 3, -1, 5, 4], 2)); // 4
