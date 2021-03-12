/*

Reference: https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript
*/
function solution(answers) {
  var answer = [];

  // 1번 수포자: 12345 반복 %5
  let aArr = [1, 2, 3, 4, 5]

  // 2번 수포자: 21232425 21232425 %8
  let bArr = [2, 1, 2, 3, 2, 4, 2, 5]

  // 3번 수포자: 3311224455 3311224455 %10
  let cArr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  let a = 0
  let b = 0
  let c = 0

  answers.forEach((v, i) => {
    if (v === aArr[i % 5]) a++
    if (v === bArr[i % 8]) b++
    if (v === cArr[i % 10]) c++
  })

  const highest = Math.max(a, b, c)

  if (highest === a) answer.push(1)
  if (highest === b) answer.push(2)
  if (highest === c) answer.push(3)

  return answer.sort((a,b) => a-b)
}

console.log(solution([1, 2, 3, 4, 5])) // [1]
console.log(solution([1, 3, 2, 4, 2])) // 	[1, 2, 3]
