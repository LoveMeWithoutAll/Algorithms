/*
매일프로그래밍(https://mailprogramming.com/subscribe)

간격(interval)로 이루어진 배열이 주어지면, 겹치는 간격 원소들을 합친 새로운 배열을 만드시오. 간격은 시작과 끝으로 이루어져 있으며 시작은 끝보다 작거나 같습니다.

Given a list of intervals, merge intersecting intervals.

예제)
Input: {{2,4}, {1,5}, {7,9}}
Output: {{1,5}, {7,9}}

Input: {{3,6}, {1,3}, {2,4}}
Output: {{1,6}}
 */

function merge (arr) {
	let isIntersectArr = new Array(arr[0][0]).fill(false);

	arr.map(elem => {
		if (isIntersectArr.length < elem[1]  + 1) isIntersectArr.length = elem[1] + 1;
		isIntersectArr.fill(true, elem[0], elem[1]+1)
	});

	let result = [];

	let isIntersect = false;
	let head = 0;
	let tail = 0;

	for (let idx = 0; idx < isIntersectArr.length; idx++) {
		if (isIntersectArr[idx] && !isIntersect) {
			head = idx;
			isIntersect = true;
		}
		else if (isIntersectArr[idx] && isIntersect) {
			tail = idx;
			if (idx === isIntersectArr.length-1) result.push([head, tail])
		}
		else if (!isIntersect[idx] && isIntersect) {
			result.push([head, tail]);
			isIntersect = false;
			head = 0;
			tail = 0;
		}
	}

	return result
}

const arr = [[2,4], [1,5], [7,9]];
console.log(merge(arr));

const arr2 = [[3,6], [1,3], [2,4]];
console.log(merge(arr2));
