/**
 * LeetCode Question ID: 35
 * 
 * Given a sorted array and a target value, return the index if the target is 
 * found. If not, return the index where it would be if it were inserted in 
 * order. 
 * You may assume no duplicates in the array.
 * 
 * @author martinwangjun@163.com
 * 
 * Example 1:
 * Input: [1,3,5,6], 5
 * Output: 2
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] >= target){
      return i;
    }
  }
  return nums.length;
};

console.log(searchInsert([0, 1, 2, 4], 1));
console.log(searchInsert([0, 1, 2, 4], 3));
console.log(searchInsert([0, 1, 2, 4], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 5));

