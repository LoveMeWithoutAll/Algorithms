/*
안녕하세요, 매일프로그래밍 이번주 문제입니다.
중복된 원소가 없는 정렬된 배열이 있습니다. 이 배열에서 원소의 값이 원소의 인덱스 값과 같다면 프린트 하시오. 시간복잡도 O(log n).

Given a sorted array of unique values, find an element where its value is equal to the index.

input: [-30, 1, 4, 60]
output: 1 // input[1] = 1

input: [0, 3, 10, 60]
output: 0 // input[0] = 0

input: [-40, -30, -20, 3]
output: 3 // input[3] = 3
*/

const ElementEqualToIndex = arr => {
    for (let idx = 0; idx < arr.length; idx++) {
        if (idx === arr[idx]) console.log(idx)
    }
}

const input1 = [-30, 1, 4, 60]
ElementEqualToIndex(input1)

const input2 = [0, 3, 10, 60]
ElementEqualToIndex(input2)

const input3 = [-40, -30, -20, 3]
ElementEqualToIndex(input3)