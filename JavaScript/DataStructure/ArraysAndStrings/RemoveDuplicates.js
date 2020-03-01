/*
- Remove Duplicates from Sorted Array
- URL: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
- Description: Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length. Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let idx = 0
    let jdx = idx + 1
    while (jdx < nums.length) {
        if (nums[idx] === nums[jdx]) {
            nums.splice(idx, 1)
        } else {
            idx++
            jdx++
        }
    }

    return nums.length
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

console.log(removeDuplicates(nums))