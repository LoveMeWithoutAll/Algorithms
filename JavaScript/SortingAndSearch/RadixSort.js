/*
Given an array consisting of 0, 1 and 2s, sort this array. Time complexity must be O(n).

Input: [0, 1, 2, 2, 0, 0, 0, 1]
Output: [0, 0, 0, 0, 1, 1, 2, 2]

Reference: https://mailprogramming.com/solution/47?email=ys.ahn@outlook.com&token=9bce9302fe6635cb22a8961b9b02e8be07602401409aeebc67699fdc6e6f5493
*/

function radixSort(arr) {
  let sorted = [0, 0, 0]
  
  arr.forEach(element => {
    sorted[element]++
  });

  let array0 = new Array(sorted[0]).fill(0)
  let array1 = new Array(sorted[1]).fill(1)
  let array2 = new Array(sorted[2]).fill(2)

  console.log(array0)
  console.log(array1)
  console.log(array2)

  const finalArr = array0.concat(array1).concat(array2)

  return finalArr
}

const sortedArr = radixSort([0, 1, 2, 2, 0, 0, 0, 1])
console.log(sortedArr)