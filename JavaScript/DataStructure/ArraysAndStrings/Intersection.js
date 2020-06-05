/*
Intersection of Two Arrays II

Given two arrays, write a function to compute their intersection.

Example 1:
 Input: nums1 = [1,2,2,1], nums2 = [2,2]
 Output: [2,2]

Example 2:
 Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 Output: [4,9]

Note:
 Each element in the result should appear as many times as it shows in both arrays.
 The result can be in any order.

Follow up:
 What if the given array is already sorted? How would you optimize your algorithm?
 What if nums1's size is small compared to nums2's size? Which algorithm is better?
 What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

Reference: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let accumulator = []

    for (let idx = 0; idx < nums1.length; idx++) {
        let pointer = nums1[idx]
        let jdx = nums2.indexOf(pointer)
        if (jdx !== -1) {
            accumulator.push(pointer)
            nums2.splice(jdx, 1)
        }
    }

    return accumulator
};

console.log(intersect([1, 2, 2, 1], [2, 2])) // [2, 2]