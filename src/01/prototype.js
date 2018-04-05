let o = {
  a: 2, 
  m: function () {
    return this.a + 1;
  }
}

console.log(o.m()); // RESULT: 3

let p = Object.create(o);
p.a = 4;
console.log(p.m()); // RESULT: 5