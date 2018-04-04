let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.filter(x => x % 2 === 0));

console.log(arr.filter(function(x){
  return x % 2 === 0;
}));
