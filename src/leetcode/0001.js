/**
 * LeetCode Question ID: 1
 * 
 * Given an array of integers, return indices of the two numbers such that they 
 * add up to a specific target. You may assume that each input would have 
 * exactly one solution, and you may not use the same element twice.
 * 
 * @author: martinwangjun@163.com
 */

const nums = [2, 7, 11, 15]
const target = 9

// Approach #1: brute force
let func = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
}
console.log(func(nums, target));





