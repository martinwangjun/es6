let arr = [1, 2, 3, 4, 5];
// 使用匿名函数
console.log(arr.reduce(function(x, y){
  return x + y;
}));
// 使用ES6的箭头函数
console.log(arr.reduce((x, y) => x + y));
