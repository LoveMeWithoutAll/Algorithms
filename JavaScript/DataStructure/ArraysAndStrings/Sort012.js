/*
EN: Given an array consisting of 0, 1 and 2, sort the array only using constant space at linear times.
KO: 원소가 0, 1, 2로 구성된 배열이 주어졌을 때, 상수 공간을 이용해 선형 시간에 배열을 정렬하시오.
  Input: [0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0]
  Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2]
*/

function sort (arr) {
  const orderdArr = [0, 0, 0]
  arr.forEach(element => {
    orderdArr[element] = orderdArr[element] + 1
  });
  return orderdArr.reduce((accu, curr, idx) => {
    for (let jdx = 0; jdx < curr; jdx++) {
      accu.push(idx)
    }
    return accu
  }, [])
}

console.log(sort([0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0])) // [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2]