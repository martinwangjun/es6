"use strict";

// function foo () {
//   setTimeout(function() {
//     console.log('id: ', this.id);
//   }, 500);
// }

// var id = 21;
// foo.call({id: 42});

var obj = {
  birth: 1990,
  getAge: function getAge() {
    var _this = this;

    var b = this.birth;
    var fn = function fn() {
      return new Date().getFullYear() - _this.birth;
    };
    return fn();
  }
};

console.log(obj.getAge());