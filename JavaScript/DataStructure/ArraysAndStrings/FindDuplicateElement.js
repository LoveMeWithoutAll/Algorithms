/*
If an array of n sizes contains numbers from 1 to n-1 and one more, find out what the numbers are.

크기가 n인 배열에 1부터 n - 1까지의 수가 들어 있고, 중복된 수가 한 개 더 들어 있다고 할 때, 중복된 수가 무엇인지 찾으시오.

  Input: [1, 2, 3, 4, 4]
  Output: 4

  Input: [1, 2, 3, 4, 2]
  Output: 2

Reference: https://mailprogramming.com/solution/60?email=ys.ahn@outlook.com&token=8f841ba360d8069b4d42ab5ba0bc13ec455944514d9165343b7db18116d93ab1
*/

function findDupl (arr) {
  const sumOfInput = arr.reduce((accumulator, currentValue) => {
    accumulator += currentValue
    return accumulator
  }, 0)
  const length = arr.length
  const sumOfN = (length - 1) * length / 2

  return sumOfInput - sumOfN
}

console.log(findDupl([1, 2, 3, 4, 4])) // 4
console.log(findDupl([1, 2, 3, 4, 2])) // 2