/*
URL: https://leetcode.com/problems/rotate-array/

Given an array, rotate the array to the right by k steps, where k is non-negative.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = k % nums.length
    if (n === 0) return
    while (n > 0) {
        let tail = nums.pop()
        nums.unshift(tail)
        n--
    }
};

rotate([1, 2, 3, 4, 5, 6, 7], 3)