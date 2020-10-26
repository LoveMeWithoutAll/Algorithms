/*
Given an integer array, Find main element.
The main element is that appears in excess of half the size of the array.

중복된 원소가 있는 정수 배열이 주어졌을 때, 주요 원소를 찾으시오.
주요 원소는 배열 크기의 반을 초과하여 등장하는 원소입니다.

example
  Input: [2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2]
  Output: 2

Reference: https://mailprogramming.com/solution/68?email=ys.ahn@outlook.com&token=ecebc29db365aed9d6bb24cf3cfddc1d9df38875a9c8c100ab2518ea75152c32
*/

function find (arr) {
  const dic = {}
  const len = arr.length
  let result = -Infinity
  arr.map(v => {
    if (dic[v]) {
      dic[v] = dic[v] + 1
      if (dic[v] >= len/2) result = v
    } else {
      dic[v] = 1
    }
  })

  return result
}

console.log(find([2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2]))
