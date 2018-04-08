/**
 * LeetCode Question ID: 53
 * 
 * Find the contiguous subarray within an array (containing at least one number)
 * which has the largest sum. For example, given the array 
 * [-2,1,-3,4,-1,2,1,-5,4], the contiguous subarray [4,-1,2,1] has the largest 
 * sum = 6.
 * 
 * @author: martinwangjun@163.com
 * 
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
  let max = -Infinity, sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum > 0) {
      sum += nums[i]; 
    } else{
      sum = nums[i];
    }
    max = Math.max(max, sum);
  }
  return max;
};

console.log(maxSubArray([1,2,3,4,5,6]));
console.log(maxSubArray([-1,2,3,4,5,6]));
console.log(maxSubArray([1,-2,3,4,-5,6]));
console.log(maxSubArray([1,2,-3,4,5,-6]));
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-1,-2,-3,-4,-5,-6]));
