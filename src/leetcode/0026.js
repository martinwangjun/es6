/**
 * LeetCode Question ID: 26
 * 
 * Given a sorted array, remove the duplicates in-place such that each element 
 * appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying 
 * the input array in-place with O(1) extra memory.
 * 
 * @author martinwangjun@163.com
 * 
 * @param {number[]} nums
 * @return {number}
 */
nums = [1,1,2,3,3,4,4,4,4,5];
var removeDuplicates = function(nums) {
  let length = 0;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] !== nums[length]){
      length++;
      nums[length] = nums[i];
    }
  }
  return length;
};
console.log(removeDuplicates([])); // 0
console.log(removeDuplicates([1])); // 1
console.log(removeDuplicates([1,1])); // 1
console.log(removeDuplicates([1,1,2])); // 2
console.log(removeDuplicates([1,1,3,3,4,4,4,4,5])); // 4
console.log(removeDuplicates([1,1,2,3,3,4,4,4,4,5])); // 5
console.log(removeDuplicates([1,2,3,4,5,6,7,8,9])); // 9
console.log(removeDuplicates([1,3,5,7,9,11,13,15,15,17])); // 9
