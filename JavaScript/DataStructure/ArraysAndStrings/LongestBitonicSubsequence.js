/*
EN
  The longest bitonic subsequence problem is to find a subsequence of a given sequence in which the subsequence’s elements are first sorted in in increasing order, then in decreasing order, and the subsequence is as long as possible.

Ko
  가장 긴 바이토닉 부분 수열 문제(Longest Bitonic Subsequence Problem)는 주어진 배열에서 우선 값이 증가했다가
  그 후 감소하는 원소들의 집합 중 가장 긴 부분 수열을 찾는 문제입니다.
  배열이 주어졌을 때, 가장 긴 바이토닉 부분 수열을 찾으시오.
  부분 수열은 주어진 배열 원소들의 순서를 유지하는 원소들의 집합입니다.
  연속된 원소들이 선택될 필요는 없습니다.
  단, 증가만 하거나 감소만 하는 부분 수열도 답이 될 수 있습니다.

Example
  Input: [4, 2, 5, 9, 7, 6, 10, 3, 1]
  Output: [4, 5, 9, 7, 6, 3, 1]

  Input: [1, 2, 3, 4, 5]
  Output: [1, 2, 3, 4, 5]

  Input: [5, 4, 3, 2, 1]
  Output: [5, 4, 3, 2, 1]
*/

function bitonic (arr) {
  const climbUp = arr => {
    let result = []
    let tmp = Number.MIN_SAFE_INTEGER
    
    for (let idx = 0; idx < arr.length; idx++) {
      if (arr[idx] > tmp) {
        result.push(arr[idx])
        tmp = arr[idx]
      }
    }

    return result
  }

  const climbdown = arr => {
    let result = []
    let tmp = Number.MAX_SAFE_INTEGER

    for (let idx = 0; idx < arr.length; idx++) {
      if (arr[idx] < tmp) {
        result.push(arr[idx])
        tmp = arr[idx]
      }
    }

    return result
  }

  const getPivotIdx = arr => {
    let maxLen = 0
    let maxLenIdx = -1
    for (let idx = 0; idx < arr.length; idx++) {
      const leftArr = arr.slice(0, idx)
      const rightArr = arr.slice(idx, arr.length)
      const len = climbUp(leftArr).length + climbdown(rightArr).length - 1
      if (len > maxLen) {
        maxLen = len
        maxLenIdx = idx
      }
    }
    return maxLenIdx
  }

  const pivotIdx = getPivotIdx(arr)

  const leftArr = climbUp(arr.slice(0, pivotIdx))
  const rightArr = climbdown(arr.slice(pivotIdx, arr.length))
  
  return [...leftArr, ...rightArr]
}

console.log(bitonic([4, 2, 5, 9, 7, 6, 10, 3, 1])) // [4, 5, 9, 7, 6, 3, 1]
// console.log(bitonic([1, 2, 3, 4, 5])) // [1, 2, 3, 4, 5]
// console.log(bitonic([5, 4, 3, 2, 1])) // [5, 4, 3, 2, 1]
