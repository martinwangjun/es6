const s = new Set();
[2, 3, 3, 5, 3, 4, 1, 8, 9].forEach(x => s.add(x));

// ES6方式来遍历数据
for(let x of s){
  console.log(x);
}

let s1 = new Set([1, 2, 4, 5, 3, 2, 4]);
console.log(s1)
