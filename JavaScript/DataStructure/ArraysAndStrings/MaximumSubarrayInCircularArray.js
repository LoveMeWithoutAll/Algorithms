/*
EN
  Given a circular integer array, find a subarray with a maximum sum.
KO
  순환 정수 배열이 주어졌을 때, 합이 최대가 되는 부분 배열을 구하시오.

Example
  #1
    Input: [2, 1, -5, 4, -3, 1, -3, 4, -1]
    Output: subarray [4, -1, 2, 1], sum 6
  #2
    Input: [-3, 1, -3, 4, -1, 2, 1, -5, 4]
    Output: subarray [4, -1, 2, 1], sum 6

Reference: https://mailprogramming.com/solution/82?email=ys.ahn@outlook.com&token=27e63c0ef31907c592bdb5b1ae1d43dfa99dc3473f40dc19056f6002aabeac8b
*/

function maxSubarray(arr) {
  arr = [...arr, ...arr]

  let max = Number.MIN_SAFE_INTEGER
  let end = 0
  let startIdx = 0
  let endIdx = 0

  for (let idx = 0; idx < arr.length; idx++) {
    let num = arr[idx]

    if (num > end + num) {
      end = num
      startIdx = idx
    } else {
      end = end + num
    }

    if (end > max) {
      max = end
      endIdx = idx
    }
  }

  return arr.slice(startIdx, endIdx+1)
}

const arr0 = [2, 1, -5, 4, -3, 1, -3, 4, -1]
console.log(maxSubarray(arr0)) // [4, -1, 2, 1]

const arr1 = [-3, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubarray(arr1)) // [4, -1, 2, 1]