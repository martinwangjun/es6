/**
 * 水仙花数：一个数等于它各个位数的立方和
 * 
 * @author martinwangjun@163.com
 */

for(let i = 100; i < 1000; i++){
  let a = Math.floor(i / 100);
  let b = i % 100;
  b = Math.floor(b / 10);
  let c = i % 10;
  if(i === (a ** 3 + b ** 3 + c ** 3)){
    console.log(i);
  }
}
