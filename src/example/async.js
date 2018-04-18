// let foo = function () {
//   setTimeout(function(){
//     console.log('After 1000 ms.')
//   }, 1000);
// };

// console.log('Before');
// foo();
// console.log('End');

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log('i = ', i);
//   }, 1000);
// }

// console.log(i);

// var loop = function (_i) {
//   setTimeout(function() {
//       console.log('2：', _i);
//   }, 1000);
// };

// for (var _i = 0; _i < 5; _i++) {
//   loop(_i);
// }

// for(var i = 0; i < 5; i++){
//   (function(j){
//     setTimeout(function(){
//       console.log(j);
//     }, 1000);
//   })(i);
// }

// console.log(i);

// var output = function (i) {
//   setTimeout(function(){
//     console.log(i);
//   });
// };

// for(var i = 0; i < 5; i++){
//   output(i);
// }

// console.log(i);

// for (var i = 0; i < 5; i++){
//   (function(j){
//     setTimeout(function(){
//       console.log(j)
//     }, 1000 * j);
//   })(i);
// }

// setTimeout(function() { // 这里增加定时器，超时设置为 5 秒
//   console.log(i);
// }, 1000 * i);


// const tasks = [];
// for(var i = 0; i < 5; i++){
//   ((j)=>{
//     tasks.push(new Promise((resolve)=>{
//       setTimeout(()=>{
//         console.log(j);
//         resolve();
//       }, 1000 * j);
//     }));
//   })(i);
// }

// Promise.all(tasks).then(() => {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// });

// new Promise((resolve, reject) => {
//   console.log('Initial');
//   resolve();
// })
// .then(() => {
//   throw new Error('Something failed');
//   console.log('Do this');
// })
// .catch(() => {
//   console.log('Do that');
// })
// .then(() => {
//   console.log('Do this whatever happened before')
// });

// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   });
// }

// timeout(1000).then((value) => {
//   console.log(value);
// });




// var p = new Promise(function(resolve, reject){
//   resolve(5);
// }).then(function(value){
//   console.log(value);
// })

// var p1 = new Promise(function(resolve, reject){
//   reject(new Error('错误'))
// }).then(function(value){
//   console.log(value)
// }, function(reason){
//   console.log(reason) //Error: 错误(…)
// })



// function func1 (a, func2) {
//   if (a > 10 && typeof func2 == 'function') {
//     func2();
//   }
// }

// func1(11, function(){
//   console.log('Hello World!')
// });



// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'test');
//   });
// }

// timeout(1000).then((value) => {
//   console.log(value);
// });


// console.log(setTimeout(function(){
//   console.log('do nothing');
// }, 1000, 'fdsfffsdfsdfdsfdsf'));

// setTimeout(function () {
//   setTimeout(function () {
//     console.log(new Date().getTime());
//     console.log('TEST');
//   }, 2000);
//   console.log(new Date().getTime());
// }, 2000);
// console.log(new Date().getTime());

// let promise = new Promise(function(resolve, reject){
//   console.log('PROMISE');
//   resolve();
// });

// promise.then(function(){
//   console.log('RESOLVE.');
// });

// console.log('HI');



/**
 * 异步加载图片
 */
// function loadImageAsync(url){
//   return new Promise(function(resolve, reject){
//     const image = new Image();
//     image.onload = function(){
//       resolve(image);
//     };

//     image.onerror = function () {
//       reject(new Error('Could not load image at ' + url));
//     };

//     image.src = url;
//   });
// }

// loadImageAsync('https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1414596542,3521173688&fm=202&mola=new&crop=v1');



// const getJSON = function(url) {
//   const promise = new Promise(function(resolve, reject){
//     const handler = function() {
//       if (this.readyState !== 4) {
//         return;
//       }
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//     const client = new XMLHttpRequest();
//     client.open("GET", url);
//     client.onreadystatechange = handler;
//     client.responseType = "json";
//     client.setRequestHeader("Accept", "application/json");
//     client.send();

//   });

//   return promise;
// };

// getJSON("/posts.json").then(function(json) {
//   console.log('Contents: ' + json);
// }, function(error) {
//   console.error('出错了', error);
// });


// const tasks = [];
// const output = (i) => new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     console.log(i);
//     resolve();
//   }, 1000 * i);
// });

// for(var i = 0; i < 5; i++){
//   tasks.push(output(i));
// }

// Promise.all(tasks).then(() => {
//   setTimeout(() => {
//     console.log(i)
//   }, 1000);
// });


