"use strict";

var o = {
  a: 2,
  m: function m() {
    return this.a + 1;
  }
};

console.log(o.m()); // RESULT: 3

var p = Object.create(o);
p.a = 4;
console.log(p.m()); // RESULT: 5