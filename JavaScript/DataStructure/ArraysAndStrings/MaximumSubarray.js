/*
EN
Given an integer array, calculate the sum of the subarray with the maximum sum.
Elements in a subarray must consist of continuous elements.

KO
정수 배열이 주어졌을 때, 합이 최대가 되는 부분 배열의 합을 구하시오.
단, 부분 배열의 원소들은 연속된 원소들로 구성되어야 합니다.

Example
  Input: [-2, 1, -3, 4, -1, 2, 1, -5, -4]
  Output: 6 (subarray is [4, -1, 2, 1])

  Input: [-8, -3, -6, -2, -5, -4]
  Output: -2 (subarray is [-2])

Reference: https://mailprogramming.com/solution/74?email=ys.ahn@outlook.com&token=f8aaee1b03189ab75ce9be216968b8d07c04844dff17a46cd8714980d3d70717
*/

function maximumSubarray (arr) {
  let max = Number.MIN_SAFE_INTEGER
  let end = 0

  for (let num of arr) {
    end = Math.max(end + num, num)
    max = Math.max(end, max)
  }

  return max
}

console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, -4])) // 6
console.log(maximumSubarray([-8, -3, -6, -2, -5, -4])) // -2
