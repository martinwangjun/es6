'use strict';

// 对象的解构赋值
// let {foo, bar} = {foo: 'aaa', bar: 'bbb'};
// console.log(foo);
// console.log(bar);

// 键值的顺序不影响赋值
var _foo$bar = { foo: 'aaa', bar: 'bbb' },
    bar = _foo$bar.bar,
    foo = _foo$bar.foo;

console.log(foo);
console.log(bar);