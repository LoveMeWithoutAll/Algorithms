/*


Reference: https://programmers.co.kr/learn/courses/30/lessons/42578?language=javascript
*/
function solution(clothes) {
  var answer = 1;

  function makeMap(input) {
    let map = new Map()

    input.forEach(v => {
      const key = v[1]
      const value = v[0]
      if (map.has(key)) {
        map.set(key, [...map.get(key), value])
      } else {
        map.set(key, [value])
      }
    })

    return map
  }

  const clothesMap = makeMap(clothes)

  console.log(clothesMap)

  clothesMap.forEach(v => {
    answer *= v.length + 1
  })


  return answer - 1;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])) // 5
