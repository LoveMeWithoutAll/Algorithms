/*
Given two sorted arrays, merge them into one array that is sorted. Implement the solution in JavaScript to see if your code runs successfully!

Reference: https://www.educative.io/module/lesson/data-structures-javascript/R1Q732DOYX0
*/
function mergeArrays(arr1, arr2) {
  let output = []

  while (arr1.length > 0 || arr2.length > 0) {
    let pointer1 = arr1[0] !== undefined ? arr1[0] : Number.MAX_SAFE_INTEGER
    let pointer2 = arr2[0] !== undefined ? arr2[0] : Number.MAX_SAFE_INTEGER

    if (pointer1 > pointer2) {
      output.push(arr2.shift())
    } else if (pointer1 < pointer2) {
      output.push(arr1.shift())
    } else if (pointer1 === pointer2) {
      output.push(arr1.shift())      
    }
  }

  return output
}

const result = mergeArrays([-133, -100, 0, 4], [-2000, 2000])

console.log(result) // -2000,-133,-100,0,4,2000	
