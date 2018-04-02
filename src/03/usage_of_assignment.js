/**
 * Usage of assignment in ES6 way
 * 
 * @author: martinwangjun@163.com
 */

// 1. Switch values
let x = 1;
let y = 2;

[x, y] = [y, x];
console.log('UNIT1: x, y =', x, y);

// 2. ruturn multiple values from a function

// Return an array
function example(){
  return [1, 2, 3];
}

let [a, b, c] = example();
console.log('UNIT2: a, b, c = ', a, b, c);

// return an object
function example2(){
  return {
    foo: 111,
    bar: 222
  };
}
let {foo, bar} = example2();
console.log('UNIT2: foo, bar =', foo, bar);

// 3. To be the parameters in a function
function f1([x, y, z]) {
  console.log('UNIT3: x, y, z = ', x, y, z);
}
f1([3, 2, 1]);

function f2({m, n, k}){
  console.log('UNIT3: m, n, k = ', m, n, k);
}
f2({k: 9, n: 8, m: 7});


// 4. Get JSON data
let jsonData = {
  id: 12,
  status: 'OK',
  data: [89, 98, 99]
};

let {id, status, data: scores} = jsonData;
console.log('UNIT4: id, status, data: scores = ', 
  id, status, scores);

// 5. function's default values
let user = {
  name: 'Martin',
  age: 18,
  scores: {
    maths: 99,
    english: 100
  }
};

user.scores = function ({
  maths = 100,
  english = 100
}) {
  
}

console.log(user);

// 6. iterate map
const map = new Map();
map.set('maths', 99);
map.set('chinese', 86);
for(let [k, v] of map){
  console.log('UNIT6 k, v = ', k, v);
}

