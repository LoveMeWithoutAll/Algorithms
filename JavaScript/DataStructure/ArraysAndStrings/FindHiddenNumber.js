/*
Program to find the Hidden Number

Given an array of n integers, The task is to find another integer x such that, if all the elements of the array are subtracted individually from the number x, then the sum of all the differences should add to 0. If any such integer exists, print the value of x, else print -1.

Example
  Input: arr[] = {1, 2, 3}
  Output: 2
  Explanation:
  Substracting all the elements of arrays from 2,
  The sum of difference is:
  1 + 0 + (-1) = 0.

Reference: https://www.geeksforgeeks.org/program-to-find-the-hidden-number/
*/

function findHiddenNumber(arr) {
  const length = arr.length
  const sum = arr.reduce((accu, curr) => accu += curr, 0)
  const hidden = sum / length
  if (hidden % 1 === 0) {
    return hidden
  } else {
    return -1
  }
}

const arr = [1, 2, 3]
const hiddenNum = findHiddenNumber(arr)

console.log(hiddenNum)