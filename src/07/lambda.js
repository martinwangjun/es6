// function foo () {
//   setTimeout(function() {
//     console.log('id: ', this.id);
//   }, 500);
// }

// var id = 21;
// foo.call({id: 42});

let obj = {
  birth: 1990,
  getAge: function (){
    let b = this.birth;
    let fn = () => new Date().getFullYear() - this.birth;
    return fn();
  }
}

console.log(obj.getAge());
