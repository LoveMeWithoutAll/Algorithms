/*
EN
  Given a positive integer array and an integer 's', find a combination of elements whose sum becomes 's'.

KO
  양의 정수 배열과 정수 s가 주어졌을 때, 합이 s가 되는 원소들의 조합이 있는지 찾으시오.

Example
  Input: A = { 7, 3, 2, 5, 8 }, s = 14
  Output: Yes (7, 2, 5)

Reference: https://mailprogramming.com/solution/79?email=ys.ahn@outlook.com&token=f8c2ad32596a4ad36234118c617c6eb9c1f78d7a08d623f70292024555612307
*/

function subsetSum (arr = [], s = 0) {
  let result = false
  arr.sort((a, b) => a - b)
  
  const isSubset = (arr = [], s = 0) => {
    if (result) return
    if (arr.length === 0) return
    if (s < 0) return
    if (s === 0) {
      result = true
      return
    }

    for (let idx = 0; idx < arr.length; idx++) {
      let tmpArr = [...arr]
      const removed = tmpArr.splice(idx, 1)
      isSubset(tmpArr, s - removed)
    }
  }

  isSubset(arr, s)

  return result ? 'Yes' : 'No'
}

console.log(subsetSum([7, 3, 2, 5, 8], 14)) // Yes
// console.log(subsetSum([7, 3, 2, 5, 8], 30)) // No
