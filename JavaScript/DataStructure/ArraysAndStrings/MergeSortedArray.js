/*
En:
Given array X and Y, array X's length is m & Y's length is n.
Two arrays are already sorted.
Array X has exactly n empty cells.
Align the elements of array Y into the X-array and align the elements.

Ko:
사이즈가 m인 배열 X와 사이즈가 n인 배열 Y가 주어집니다.
두 배열은 모두 정렬된 상태입니다.
배열 X에는 정확히 n개의 비어있는 셀이 있다고 할 때,
배열 Y의 원소를 X 배열로 합치며 원소들을 정렬 시키시오.

Input
  X = [0, 2, 0, 3, 0, 5, 6, 0, 0] (0 is empty cell)
  Y = [1, 8, 9, 10, 15]
Output
  X = [1, 2, 3, 5, 6, 8, 9, 10, 15]

Reference: https://mailprogramming.com/solution/63?email=ys.ahn@outlook.com&token=a39028519882a16268fc9985a06825e6794ad769568dbb32c2d61ce17bcadc28
*/

function merge(X, Y) {
  if (findNextElementIndex(X, 0) === -1) return X

  const xLen = X.length
  const yLen = Y.length

  let result = []

  let idx = 0
  let jdx = 0
  let nextXElementIdx = findNextElementIndex(X, idx)

  while (idx < xLen && jdx < yLen) {
    if (X[nextXElementIdx] < Y[jdx]) {
      result.push(X[nextXElementIdx])
      idx = nextXElementIdx + 1
      nextXElementIdx = findNextElementIndex(X, idx)
    } else {
      result.push(Y[jdx])
      jdx++
    }
  }

  return result
}

const findNextElementIndex = (array, kdx) => {
  for (let idx = kdx; idx < array.length; idx++) {
    if (array[idx] !== 0) {
      return idx
    }
  }
  return -1
}

const X = [0, 2, 0, 3, 0, 5, 6, 0, 0]
const Y = [1, 8, 9, 10, 15]

console.log(merge(X, Y))