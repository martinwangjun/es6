// What the fuck of this in javascript!!!

// var x = 2;
// console.log(this.x);
// /* 
// 运行结果： undefined

// 原因： 在node.js中，默认使用use strict。
// */



// function test(){
//   console.log(this.x)
// }

// var obj = {};
// obj.x = 123;
// obj.m = test;
// obj.m();
// /*
// 运行结果： 123

// 原因： 在test()中的this，指向调用test()的obj
// */

// var person = {
//   first: 'John',
//   last: 'Smith',
//   full: function () {
//     console.log(this);
//     console.log(this.first + ' ' + this.last);
//   }
// };

// person.full();

var person = {
  first: 'John',
  last: 'Smith',
  full: function(){
    console.log(this.first + ' ' + this.last);
  }
}








