/*
EN
  Given an integer array, change the value of the element such that each element is equal to the product of all the elements of array except itself.
  Not perform a division operation.
KO
  정수 배열이 주어졌을 때, 배열의 원소의 값을 자신을 제외한 다른 원소들의 곱으로 변경하시오.
  단, 나누기 연산은 수행하지 않습니다.


Example1
  Input: [1, 2, 3, 4, 5]
  Output: [120, 60, 40, 30, 24]

Example2
  Input: [5, 3, 4, 2, 6, 8]
  Output: [1152, 1920, 1440, 2880, 960, 720]

Reference: https://mailprogramming.com/solution/71?email=ys.ahn@outlook.com&token=540cfddb70f769d35158bceed86f89406534fd382be55f90729b58758a774cf9
*/

function product(arr) {
  const result = []

  const multiplyer = inputArr => {
    return inputArr.reduce((acc, cur) => acc = cur * acc, 1)
  }

  for (let idx = 0; idx < arr.length; idx++) {
    const tmpArr = [...arr]
    tmpArr.splice(idx, 1)
    result.push(multiplyer(tmpArr))
  }

  return result
}

// console.log(product([1, 2, 3, 4, 5])) // [120, 60, 40, 30, 24]
console.log(product([5, 3, 4, 2, 6, 8])) // [1152, 1920, 1440, 2880, 960, 720]