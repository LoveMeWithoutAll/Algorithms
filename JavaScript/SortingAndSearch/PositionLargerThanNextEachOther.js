/*
Given an integer arrangement, place the elements in the even position so that they are larger than the elements next to each other.
Assume that no redundant elements are present in the array.

ex
  Input: [1, 2, 3, 4, 5, 6, 7]
  Output: [1, 3, 2, 5, 4, 7, 6]

  Input: [9, 6, 8, 3, 7]
  Output: [6, 9, 3, 8, 7]

  Input: [6, 9, 2, 5, 1, 4]
  Output: [6, 9, 2, 5, 1, 4]

Reference: https://mailprogramming.com/solution/66?email=ys.ahn@outlook.com&token=54846502ed3711ff7f61129a026f034c3ab82d3b6a9e9131ad702674ade0d1de
*/

function positionLargerThanNextEachOther (arr) {
  let tmpArr = [...arr]
  tmpArr.sort((a, b) => a - b)

  for (let idx = 1; idx < tmpArr.length - 1; idx += 2) {
    const tmp = tmpArr[idx]
    tmpArr[idx] = tmpArr[idx+1]
    tmpArr[idx+1] = tmp
  }

  return tmpArr
}

console.log(positionLargerThanNextEachOther([1, 2, 3, 4, 5, 6, 7])) // [1, 3, 2, 5, 4, 7, 6]
console.log(positionLargerThanNextEachOther([6, 9, 3, 8, 7])) // [3, 7, 6, 9, 8]
console.log(positionLargerThanNextEachOther([6, 9, 2, 5, 1, 4])) // [1, 4, 2, 6, 5, 9]