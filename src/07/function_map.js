let arr = [1, 2, 3, 4, 5];
console.log(arr.map(x => x * x));

console.log(arr.map(function(x){
  return x * x;
}));
