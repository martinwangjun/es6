"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
nums = [1, 1, 2];
var removeDuplicates = function removeDuplicates(nums) {
  return Array.from(new Set(nums));
};
console.log(removeDuplicates(nums));