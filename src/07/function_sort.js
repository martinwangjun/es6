let arr = [3, 5, 6, 1, 8, 10, 2];
arr.sort((x, y)=>y - x);
for(let a of arr){
  console.log(a);
}

let arr2 = [
  'Ada',
  'Steven',
  'Mary',
  'Elsa',
  'Zoe',
  'Vicky',
  'Rebecca'
]

arr2.sort((x, y)=>y.length - x.length);
for(let a of arr2){
  console.log(a);
}
