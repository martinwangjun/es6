'use strict';

/**
 * Array basic
 * 
 * @author martinwangjun@163.com
 */

// UNIT2 - 1. concat连接两个数组 
var arrA1 = [1, 2, 3];
var arrA2 = [4, 5, 6];
var arrA3 = [7, 8, 9];
var arrA = arrA1.concat(arrA2, arrA3);
console.log('arrA1 = ', arrA1);
console.log('arrA2 = ', arrA2);
console.log('arrA3 = ', arrA3);
console.log('concat array result = ', arrA);

/** 运行结果: 
 * arrA1 = Array(3) [1, 2, 3]
 * arrA2 = Array(3) [6, 7, 8]
 * arrA3 = Array(3) [7, 8, 9]
 * concat array result = Array(6) [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */