/*
EN: Given a string, find the longest substring that does not have duplicate characters.
KO: String이 주어지면, 중복된 char가 없는 가장 긴 서브스트링 (substring)의 길이를 찾으시오.

example
	Input: “aabcbcbc”
	Output: 3 // “abc”

	Input: “aaaaaaaa”
	Output: 1 // “a”

	Input: “abbbcedd”
	Output: 4 // “bced”

Reference: https://mailprogramming.com/subscribe
*/

/**
 * @return {number}
 */
function LongestSubstringLength (str) {
	let length = str.length
	for (let i = length; i > 0; i--) {
		for (let j = 0; j + i <= length; j++) {
			const substring = str.substring(j, i+j)
			if (!hasDuplicatedChar(substring)) {
				return substring.length
			}
		}
	}
}

function hasDuplicatedChar (str) {
	const set = new Set(str);

	return str.length !== set.size;
}

console.log(LongestSubstringLength('aabcbcbc')); // 3
console.log(LongestSubstringLength('aaaaaaaa')); // 1
console.log(LongestSubstringLength('abbbcedd')); // 4
