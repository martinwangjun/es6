/**
 * LeetCode Question ID: 9
 * 
 * Palindrome Number(回文数)
 * 
 * @author: martinwangjun@163.com
 * 
 * @param {number} x
 * @return {boolean}
 */

// 参考 Question ID: 9 的问题，反转后与原数字相比，一致就是回文数。
let isPalindrome = function(x) {
  let n = x;
  if (x < 0 || Math.floor(x) !== x) {
    return false;
  }
  if (x < 10){
    return true;
  }
  let m = 0;
  while (x >= 10) {
    let a = x % 10;
    x = (x - a) / 10;
    m = m * 10 + a;
  }
  m = m * 10 + x;
  console.log(m)
  return m === n;
};

console.log(isPalindrome(12345678987654321));

