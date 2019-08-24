/**
 * LeetCode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	let set = new Set()
	nums.map(n => {
		if (set.has(n)) {
			set.delete(n)
		} else {
			set.add(n)
		}
	})
	for (const n of set) return n
};

console.log(singleNumber([4,1,2,1,2]))
