/*
매일프로그래밍(https://mailprogramming.com/subscribe)

길이가 같은 두 문자열(string) A 와 B가 주어지면, A 가 B 로 1:1 암호화 가능한지 찾으시오.

Given two strings of equal length, check if two strings can be encrypted 1 to 1.

예제)
Input: “EGG”, “FOO”
Output: True // E->F, G->O

Input: “ABBCD”, “APPLE”
Output: True // A->A, B->P, C->L, D->E

Input: “AAB”, “FOO”
Output: False
 */

const isCipherable = (str1, str2) => {
	if (str1 === str2) return false;
	if (str1.length !== str2.length) return false;

	let cryptograph = new Map();

	for (let idx = 0; idx < str1.length; idx++) {
		const char1 = str1.substring(idx, 1);
		const char2 = str2.substring(idx, 1);
		if (cryptograph.has(char1)) {
			if (cryptograph.get(char1) !== char2) return false;
		} else {
			cryptograph.set(char1, char2);
		}
	}

	return true;
};

console.log(isCipherable('EGG', 'FOO')); // true
console.log(isCipherable('ABBCD', 'APPLE')); // true
console.log(isCipherable('AAB', 'FOO')); // false
