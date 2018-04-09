/**
 * LeetCode Question ID: 125
 * 
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * 
 * For example,
 * "A man, a plan, a canal: Panama" is a palindrome.
 * "race a car" is not a palindrome.
 * 
 * Note:
 * Have you consider that the string might be empty? This is a good question to ask during an interview.
 * 
 * For the purpose of this problem, we define empty string as valid palindrome.
 * 
 * @author: martinwangjun@163.com
 * 
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let ss = Array.from(s).map(x => x.toUpperCase()).filter(x => (x >= '0' && x <= '9') || (x >= 'A' && x <= 'Z'));
  console.log(ss);
  if (ss.length === 0) {
    return true;
  }
  let len = ss.length;
  for (let i = 0; i < len / 2 + 1; i++) {
    if (ss[i] !== ss[len - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("aa"));
console.log(isPalindrome("   "));
