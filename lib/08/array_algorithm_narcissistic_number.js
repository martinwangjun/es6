"use strict";

/**
 * 水仙花数：一个数等于它各个位数的立方和
 * 
 * @author martinwangjun@163.com
 */

for (var i = 100; i < 1000; i++) {
  var a = Math.floor(i / 100);
  var b = i % 100;
  b = Math.floor(b / 10);
  var c = i % 10;
  if (i === Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3)) {
    console.log(i);
  }
}