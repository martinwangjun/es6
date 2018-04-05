'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Basic function
 * 
 * @author  <martinwangjun@163.com>
 */

// UNIT1 - a variable to a function 
var abs = Math.abs;
console.log('typeof(abs) = ', typeof abs === 'undefined' ? 'undefined' : _typeof(abs));
console.log('abs(-100) = ', abs(-100));

// UNIT2 - arguments & rest

// 1. 调用函数时，按顺序传入参数即可
var sqrt = Math.sqrt;
console.log('sqrt(81) = ', sqrt(81));
console.log('sqrt(81, 1900) = ', sqrt(81, 1900)); // 多传入一个参数也没有问题

// 2. arguments
function foo() {
  console.log('arguments = ', arguments);
  console.log('typeof(arguments) = ', typeof arguments === 'undefined' ? 'undefined' : _typeof(arguments));
}
foo(1, 2, 3, 4, 5);

// 3. rest参数
function bar(a, b) {
  for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  console.log('a, b = ', a, b);
  console.log('typeof(rest) = ', typeof rest === 'undefined' ? 'undefined' : _typeof(rest));
}