/*
EN
Given an array of integers, move all 0s in the array to the back of the array
The order of elements other than 0 must be maintained.

KO
정수 배열이 주어졌을 때, 배열 내의 모든 0을 배열의 뒷부분으로 옮기시오.
단, 0을 제외한 원소들의 순서는 유지되어야 합니다.

Input: [6, 0, 8, 2, 3, 0, 4, 0, 1]
Output: [6, 8, 2, 3, 4, 1, 0, 0, 0]

Reference: https://mailprogramming.com/solution/69?email=ys.ahn@outlook.com&token=1faa1012059e396a0ffb554ec323f71103462cfebc069b6cc4a15ffc6e687bf2
*/

function moveZeros(arr) {
  const nonZeros = []
  const zeros = []
  arr.forEach(element => {
    if (element === 0) {
      zeros.push(0)
    } else {
      nonZeros.push(element)
    }
  });

  return [...nonZeros, ...zeros]
}

console.log(moveZeros([6, 0, 8, 2, 3, 0, 4, 0, 1])) // [6, 8, 2, 3, 4, 1, 0, 0, 0]
