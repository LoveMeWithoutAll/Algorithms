/*
* Contains Duplicate
* URL: https://leetcode.com/problems/contains-duplicate/
* Description
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.length === 0) return false
    if (nums.length === 1) return false

    const set = new Set(nums)
    const setLen = set.size

    if (setLen === nums.length) {
        return false
    } else {
        return true
    }
};

console.log(containsDuplicate([3, 1]))