/*
EN: Given an integer array, find maximum gap between two adjoining elements when the right element is larger than the left one
KO: 정수 배열이 주어졌을 때, 오른쪽 원소가 왼쪽 원소보다 더 큰 경우 중 두 원소의 차가 최대가 되는 값을 찾으시오.

Example
  Input: [2, 7, 9, 5, 1, 3, 5]
  Output: 7 (element 2 and 9)

Reference: https://mailprogramming.com/solution/73?email=ys.ahn@outlook.com&token=aec3308c967b247eaee0736dc900cdd4760b9bbcbb4019ada3be12aa9261d06a
*/

function maxGap(arr) {
  let maxGap = Number.MIN_SAFE_INTEGER
  for (let idx = 0; idx < arr.length; idx++) {
    let left = arr[idx]
    for (let jdx = arr.length - 1; jdx > idx; jdx--) {
      const right = arr[jdx]
      if (right - left > maxGap) maxGap = right- left
    }
  }
  return maxGap
}

console.log(maxGap([2, 7, 9, 5, 1, 3, 5])) // 7
