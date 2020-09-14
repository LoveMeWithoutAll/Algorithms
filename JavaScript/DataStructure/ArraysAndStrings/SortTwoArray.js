/*
Given sorted two arrays X, Y, sort these arrays while maintaining the size of the two arrays.
In other words, array X consists of small numbers, array Y consists of large numbers, and elements must be sorted.
However, when sorting, you should use only the given array without using any other data structures.

두 개의 정렬된 배열 X, Y가 주어졌을 때, 두 배열의 크기를 유지하면서 두 배열의 전체를 정렬하시오.
즉, 배열 X에는 작은 수들로 배열 Y에는 큰 수들로 구성되고 원소들은 정렬되어 있어야 합니다.
단, 정렬 시 다른 자료 구조를 사용하지 않고 주어진 배열만을 이용해야 합니다.

Input
  X: [1, 4, 7, 8, 10]
  Y: [2, 3, 9]

Output
  X: [1, 2, 3, 4, 7]
  Y: [8, 9, 10]

Reference: https://mailprogramming.com/solution/62?email=ys.ahn@outlook.com&token=1489e40df5609b28878135074529a4e7e509f5934f20eb738852ab88518487ca
*/

function sort(arr1, arr2) {
  const arr1Len = arr1.length
  const arr2Len = arr2.length
  
  while (arr1[arr1Len - 1] > arr2[0]) {
    const base = arr2[0]
    const idx = arr1.findIndex(v => v > base)

    arr2.splice(0, 1, arr1[idx])
    arr1.splice(idx, 1, base)

    arr2.sort((a, b) => a-b)
  }

  return {
    X: arr1,
    Y: arr2
  }
}

const result = sort([1, 4, 7, 8, 10], [2, 3, 9])

console.log(result.X, result.Y) // X: [1, 2, 3, 4, 7] Y: [8, 9, 10]
