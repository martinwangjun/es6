/**
 * LeetCode Question ID: 7
 * 
 * Reverse Integer: Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Note:
 * Assume we are dealing with an environment which could only hold integers 
 * within the 32-bit signed integer range. For the purpose of this problem, 
 * assume that your function returns 0 when the reversed integer overflows.
 * 
 * hint: max 32-bit signed integer is 2147483648
 * 
 * @author: martinwangjun@163.com
 */

const num = 1534236469;
let func = function (n) {
  let sign = n > 0 ? 1 : -1;
  let m = 0;
  n = Math.abs(n);
  while(n > 9){
    let a = n % 10;
    n = (n - a) / 10;
    m = m * 10 + a;
  }
  m = m * 10 + n;
  if (m > 2147483648){
    return 0;
  }
  return m * sign;
}

console.log(func(num));

