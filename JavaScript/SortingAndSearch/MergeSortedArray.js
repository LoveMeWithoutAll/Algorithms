/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
  The number of elements initialized in nums1 and nums2 are m and n respectively.
  You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
Example:
  Input:
    nums1 = [1,2,3,0,0,0], m = 3
    nums2 = [2,5,6],       n = 3
  Output: [1,2,2,3,5,6]
Constraints:
  -10^9 <= nums1[i], nums2[i] <= 10^9
  nums1.length == m + n
  nums2.length == n

Reference: https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let idx = 0
  let jdx = 0
  const nums1len = nums1.length
  while (true) {
    if (idx === nums1len) break
    if (jdx === n) break    
    const tmp1 = nums1[idx]
    const tmp2 = nums2[jdx]
    if (tmp1 < tmp2) {
      idx++
    } else if (tmp1 === tmp2) {
      nums1.splice(idx, 0, tmp2)
      idx++
      jdx++
    } else if (tmp1 > tmp2) {
      nums1.splice(idx, 0, tmp2)
      jdx++
    }
  }
  
  for (let idx = 0; idx < n; idx++) {
    nums1.pop()
  }
  
  for (let idx = jdx; idx < nums2.length; idx++) {
    nums1.push(nums2[idx])
  }
};

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3) // [1,2,2,3,5,6]
merge([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5) // [1,2,3,4,5,6]