/**
 * LeetCode Question ID: 198
 * 
 * You are a professional robber planning to rob houses along a street. Each 
 * house has a certain amount of money stashed, the only constraint stopping 
 * you from robbing each of them is that adjacent houses have security system 
 * connected and it will automatically contact the police if two adjacent 
 * houses were broken into on the same night.
 * 
 * Given a list of non-negative integers representing the amount of money of 
 * each house, determine the maximum amount of money you can rob tonight 
 * without alerting the police.
 * 
 * @author: martinwangjun@163.com
 * 
 * @param {number[]} nums
 * @return {number}
 */
let rob = function(nums) {
  let a = 0, b = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0){
      a = Math.max(a + nums[i], b);
    } else {
      b = Math.max(b + nums[i], a);
    }
  }
  return Math.max(a, b);
};

console.log(rob([1, 3, 5, 7, 9]));
console.log(rob([1, 3, 1, 1, 5, 7, 9]));
