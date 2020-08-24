/*
Sort binary array.
Time complexity must be O(n)
Space complexity must be O(1)
0 is first, and 1 is next.

바이너리 배열(원소를 0, 1만 갖는 배열)이 주어졌을 때, 배열을 정렬하시오.
단, 시간 복잡도는 O(n), 공간 복잡도는 O(1).
결과는 0이 먼저 출력되고 1이 출력되어야 합니다.

  Input: [1, 0, 1, 0, 1, 0, 0, 1]
  Output: [0, 0, 0, 0, 1, 1, 1, 1]

Reference: https://mailprogramming.com/solution/59?email=ys.ahn@outlook.com&token=1d21acba59108fd7223977c81bba9305b9104d34f1367c7c08e20adf360c6cbe
*/

function sortBinary(arr) {
  const sorted = arr.reduce((accu, curr) => {
    curr === 0 ? accu.unshift(0) : accu.push(1)
    return accu
  }, [])
  return sorted
}

console.log(sortBinary([1, 0, 1, 0, 1, 0, 0, 1]))