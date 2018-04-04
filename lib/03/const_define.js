'use strict';

var PI = 3.1415927;
// PI = 3.14
console.log(PI);

// 基本数据类型
var b = 5;
var a = b;
console.log('a = ', a);
b = 10;
console.log('a = ', a);

// 引用数据类型
var obj = {
  name: 'Apple',
  price: 123
};
var OBJ = obj;
console.log(OBJ.price);
obj.price = 321;
console.log(OBJ.price);