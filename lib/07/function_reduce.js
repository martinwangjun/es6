"use strict";

var arr = [1, 2, 3, 4, 5];
console.log(arr.reduce(function (x, y) {
  return x + y;
}));