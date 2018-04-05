"use strict";

/**
 * LeetCode Question ID: 204
 * 
 * Count Primes
 * Description:
 * 
 * Count the number of prime numbers less than a non-negative number, n.
 * 
 * Credits:
 * Special thanks to @mithmatt for adding this problem and creating all test 
 * cases.
 * 
 * @author martinwangjun@163.com
 * 
 * @param {number} n
 * @return {number}
 */

// Solution 1: 暴力法，结果超时
var countPrimes = function countPrimes(n) {
  if (n <= 2) {
    return 0;
  }
  var countCompositeNumber = 0; // 
  for (var i = 2; i < n; i++) {
    // check whether i is a prime number
    for (var j = 2; j < Math.sqrt(i) + 1; j++) {
      if (i % j === 0) {
        countCompositeNumber++;
        break;
      }
    }
  }
  return n - 1 - countCompositeNumber;
};

console.log(countPrimes(2));
console.log(countPrimes(3));
console.log(countPrimes(4));
console.log(countPrimes(5));
console.log(countPrimes(10));
console.log(countPrimes(20));
console.log(countPrimes(499979)); // Exceed Time Limit