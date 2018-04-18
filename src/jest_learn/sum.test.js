/**
 * 测试文件sum.test.js
 * 
 * @see https://segmentfault.com/a/1190000008628067
 */
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () =>{
  expect(sum(1, 2)).toBe(3);
});