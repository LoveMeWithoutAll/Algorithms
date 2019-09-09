/*
매일프로그래밍(https://mailprogramming.com/subscribe)

정수 배열(int array)이 주어지면 0이 아닌 정수 순서를 유지하며 모든 0을 배열 오른쪽 끝으로 옮기시오. 단, 시간복잡도는 O(n), 공간복잡도는 O(1)여야 합니다.

Given an integer array, move all the 0s to the right of the array without changing the order of non-zero elements.

예제)
Input: [0, 5, 0, 3, -1]
Output: [5, 3, -1, 0, 0]

Input: [3, 0, 3]
Output: [3, 3, 0]
 */

const moveWith0 = arr => {
	let cnt = 0;

	const cntZero = v => {
		if (v === 0) {
			cnt++;
			return false
		} else {
			return true
		}
	};

	let modified = arr.filter(cntZero);

	for (let idx = 0; idx < cnt; idx++) {
		modified.push(0)
	}

	return modified
};

const input1 = [0, 5, 0, 3, -1];
console.log(moveWith0(input1));

const input2 = [3, 0, 3];
console.log(moveWith0(input2));
