/*
En
  When given a binary array, find an index of zero that changes one zero to one so that the number of consecutive one is the highest.
Ko
  바이너리 배열을 주어졌을 때, 한 개의 0을 1로 바꿔 연속된 1의 수가 가장 많아지도록 하는 0의 인덱스를 찾으시오.

Example:
  Input: [0, 0, 1, 0, 1, 1, 1, 0, 1, 1]
  Output: 7

Reference; https://mailprogramming.com/solution/64?email=ys.ahn@outlook.com&token=d645a9701a93ffcb3311dffb3c2f8fd5b82d290faaa342c7614c80b531fe8e47

*/

function solution(arr) {
  let maxIdx = 0
  let maxLen = 0

  arr.map((v, i) => {
    if (v === 0) {
      let newArr = [...arr]
      newArr.splice(i, 1, 1)
      let len = countOne(newArr)
      if (len > maxLen) {
        maxLen = len
        maxIdx = i
      }
    }
  })

  return maxIdx
}

function countOne(arr) {
  let cnt = 0
  let maxLen = 0

  arr.forEach((element, idx) => {
    if (element === 1) {
      cnt++
    } else {
      if (cnt > maxLen) maxLen = cnt
      cnt = 0
    }
    if (idx === arr.length - 1 && cnt > maxLen) {
      maxLen = cnt
    }
  });
  
  return maxLen
}

console.log(solution([0, 0, 1, 0, 1, 1, 1, 0, 1, 1])) // 7