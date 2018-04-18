






/**
 * 一个示例
 * 
 * @see https://zhuanlan.zhihu.com/p/29632791
 */

// function cook(){
//   var code = Math.random();
//   console.log(code);
//   return code > 0.5 ? 'OK' : 'FAIL';
// }

// function bookTakeAway(){
//   return new Promise((resolve, reject)=>{
//     let result = cook();
//     if (result === 'OK'){
//       resolve('Deliverying...');
//     }else{
//       reject('Sorry...');
//     }
//   });
// }

// bookTakeAway()
//   .then(res=>console.log(res))
//   .catch(reason=>console.log(reason))



// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve();
//   console.log(2);
// });

// promise.then(() => {
//   console.log(3)
// });

// console.log(4);

// // Promise 构造函数是同步执行的，promise.then 中的函数是异步执行的。






// const promise1 = new Promise((resolve, reject) =>{
//   setTimeout(()=>{
//     resolve('success');
//   }, 1000);
// });

// const promise2 = promise1.then(()=>{
//   throw new Error('Error!!!');
// });

// console.log('promise1A', promise1);
// console.log('promise2B', promise2);

// setTimeout(()=>{
//   console.log('promise1C', promise1);
//   console.log('promise2D', promise2);
// }, 5000);





let p = new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('Finished!');
    resolve('What the fuck!');
  }, 2000);
});



