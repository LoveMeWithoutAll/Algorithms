/*
Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
  Given nums = [2, 7, 11, 15], target = 9,
  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
  for (let idx = 0; idx < nums.length; idx++) {
    for (let jdx = idx + 1; jdx < nums.length; jdx++) {
      if ((nums[idx] + nums[jdx]) === target) {
        return [idx, jdx]
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
  let map = new Map()
  let result = []

  nums.forEach((n, idx) => {
    const diff = target - n
    if (map.has(n)) {
      result = [map.get(n), idx]
    } else {
      map.set(diff, idx)
    }
  })

  return result
};

console.log(twoSum1([2, 7, 11, 15], 9)) // [0, 1]
console.log(twoSum2([2, 7, 11, 15], 9)) // [0, 1]