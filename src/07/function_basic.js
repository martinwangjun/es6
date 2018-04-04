/**
 * Basic function
 * 
 * @author  <martinwangjun@163.com>
 */

// UNIT1 - a variable to a function 
let abs = Math.abs;
console.log('typeof(abs) = ', typeof(abs));
console.log('abs(-100) = ', abs(-100));

// UNIT2 - arguments & rest

// 1. 调用函数时，按顺序传入参数即可
let sqrt = Math.sqrt;
console.log('sqrt(81) = ', sqrt(81));
console.log('sqrt(81, 1900) = ', sqrt(81, 1900)); // 多传入一个参数也没有问题

// 2. arguments
function foo(){
  console.log('arguments = ', arguments);
  console.log('typeof(arguments) = ', typeof(arguments));
}
foo(1, 2, 3, 4, 5);

// 3. rest参数
function bar(a, b, ...rest){
  console.log('a, b = ', a, b);
  console.log('typeof(rest) = ', typeof(rest));
}

