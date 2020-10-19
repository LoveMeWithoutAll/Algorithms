/*
정수 배열이 주어졌을 때, 왼쪽과 오른쪽의 합이 같은 값이 되는 위치를 찾으시오.
즉, A라는 배열이 있다면 A[0] + … + A[i - 1]과 A[i + 1] + … + A[n]이 같은 값이 되는 i의 위치가 답이 됩니다.
만약 A[1] + … + A[n]이 0이라면 0도 답이 됩니다.

Given an integer array, find a position where the sum of the left and right is equal.
If A[1] + … + A[n] is 0, 0 is the position.

ex)
  Input: [0, -3, 5, -4, -2, 3, 1, 0]
  Output: [0, 3, 7]

https://mailprogramming.com/solution/67?email=ys.ahn@outlook.com&token=3c434aae0aae10740612ac1b67e39ca2258daff77f54782bd868106dc14a48ea
*/

function pivotPosition(arr) {
  let result = []
  const sum = arr.reduce((acc, curr) => acc + curr, 0)
  if (sum === 0) result.push(0)

  const len = arr.length
  let left = 0
  let right = sum - arr[0]
  for (let idx = 1; idx < len; idx++) {
    left = left + arr[idx-1]
    right = right - arr[idx]
    if (left === right) result.push(idx)
  }

  return result
}

console.log(pivotPosition([0, -3, 5, -4, -2, 3, 1, 0])) // 0, 3, 7
console.log(pivotPosition([1, -3, 5, -4, -2, 3, 1, -1])) // 0
console.log(pivotPosition([1, 4, 2, 5])) // 2
