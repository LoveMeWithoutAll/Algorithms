/*
매일프로그래밍(https://mailprogramming.com/subscribe)

문자열 배열(string array)이 주어지면, 제일 긴 공통된 접두사(prefix)의 길이를 찾으시오.

Given an array of strings, find the longest common prefix of all strings.

예제)
Input: [“apple”, “apps”, “ape”]
Output: 2 // “ap”

Input: [“hawaii”, “happy”]
Output: 2 // “ha”

Input: [“dog”, “dogs”, “doge”]
Output: 3 // “dog”
 */

function findPrefix(arr) {
	if (arr.length === 0) return 0;

	let lenArr = [];
	arr.forEach(str => lenArr.push(str.length));
	lenArr.sort((a, b) => a - b);
	if (lenArr[0] === 0) return 0;

	let lengthOfPrefix = 0;
	const minLen = lenArr[0];
	let tempChar = '';
	for (let idx = 0; idx < minLen; idx++) {
		for (let jdx = 0; jdx < arr.length; jdx++) {
			let pointer = arr[jdx].split('')[idx];
			if (tempChar === '') {
				tempChar = pointer
			} else {
				if (tempChar !== pointer) return lengthOfPrefix;
			}
		}
		lengthOfPrefix += 1;
		tempChar = '';
	}

	return lengthOfPrefix;
}

console.log(findPrefix(['apple', 'apps', 'ape'])); // 2
console.log(findPrefix(['hawaii', 'happy'])); // 2
console.log(findPrefix(['dog', 'dogs', 'doge'])); // 3
