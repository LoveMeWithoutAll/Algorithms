/*
En
  Given an integer array, shuffle the elements of the array within the array.
  However, algorithms should consider all permutations equally and produce unbiased permutation.

Ko
  정수 배열이 주어졌을 때, 배열의 원소들을 배열 내에서 섞으시오.
  단, 알고리즘은 모든 순열을 동등하게 고려하여 편향되지 않은 순열을 생성해야 한다.

Example
  Input: [1, 2, 3, 4, 5, 6]
  Output: Random

Reference: https://mailprogramming.com/solution/70?email=ys.ahn@outlook.com&token=b76cff17219d1e7d407247ce759076e759b81e9129fdc995e77c3375d549c054
*/

function shuffle(arr) {
  let result = []
  while (arr.length > 0) {
    const tempIdx = Math.floor(Math.random() * arr.length)
    result.push(arr[tempIdx])
    arr.splice(tempIdx, 1)
  }
  return result
}

console.log(shuffle([1, 2, 3, 4, 5, 6]))
