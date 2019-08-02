/**
 * LeetCode: https://leetcode.com/problems/single-number-ii
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const duplicatedArr = [...new Set(nums.filter((item, index) => nums.indexOf(item) !== index))]
    let set = new Set(nums)
    duplicatedArr.map(n => set.delete(n))

    return [...set]
};

const nums = [2,2,3,2]

console.log(singleNumber(nums)) // 3
