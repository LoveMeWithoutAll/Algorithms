/*
* Move Zeroes
* URL: https://leetcode.com/problems/move-zeroes/
* Descrpition: Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
* Example:
 Input: [0,1,0,3,12]
 Output: [1,3,12,0,0]
* Note:
 You must do this in-place without making a copy of the array.
 Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let countOfZero = 0
    while (true) {
        let idx = nums.indexOf(0)
        if (idx === -1) break
        nums.splice(idx, 1)
        countOfZero++
    }

    for (let jdx = 0; jdx < countOfZero; jdx++) {
        nums.push(0)
    }

    return nums
};

let arr = [0, 1, 0, 3, 12]
arr = moveZeroes(arr)

console.log(arr)