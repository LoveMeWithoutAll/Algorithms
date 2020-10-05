/*
En: Given an integer array, find two integers in the array that are the maximum multiples.
Ko: 정수 배열이 주어졌을 때, 배열 안에서 곱이 최대가 되는 두 정수를 찾으시오.

Example:
  Input: [-10, -3, 5, 6, -2]
  Output: [-10, -3] or [5, 6]

Reference: https://mailprogramming.com/solution/65?email=ys.ahn@outlook.com&token=ae011d0087815a3e258f48d45b3b7abc6877fb90a50b534fbd6120cfadf9d6da
*/

function findMaxMultipliers (arr) {
  if (arr.length < 2) return []

  const tmpArr = [...arr]
  const maxElement = tmpArr.splice(tmpArr.indexOf(Math.max(...tmpArr)), 1)
  const secondMaxElement = tmpArr.splice(tmpArr.indexOf(Math.max(...tmpArr)), 1)

  if (arr.filter(v => v < 0).length < 2) return [maxElement, secondMaxElement]

  const MinElement = tmpArr.splice(tmpArr.indexOf(Math.min(...tmpArr)), 1)
  const secondMinElement = tmpArr.splice(tmpArr.indexOf(Math.min(...tmpArr)), 1)

  const plusMultiple = maxElement * secondMaxElement
  const minusMultiple = MinElement * secondMinElement

  if (plusMultiple > minusMultiple) {
    return [secondMaxElement, maxElement]
  } else if (plusMultiple === minusMultiple) {
    return [[MinElement, secondMinElement], [secondMaxElement, maxElement]]
  } else if (plusMultiple < minusMultiple) {
    return [MinElement, secondMinElement]
  }
}

console.log(findMaxMultipliers([-10, -3, 5, 6, -2])) // [[-10, -3], [5, 6]]