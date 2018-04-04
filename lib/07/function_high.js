"use strict";

function addResult(x, y, f) {
  return f(x) + f(y);
}

// 调用Math.abs
console.log(addResult(1, -3, Math.abs));

// 调用自定义函数
console.log(addResult(2, 3, function (x) {
  return x * x;
}));

// 调用自定义函数
console.log(addResult(3, 4, function (x) {
  return x * x;
}));