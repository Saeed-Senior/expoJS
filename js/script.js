'use strict';

//=======================================FOREACH=======================================//

// 1.Задача
let arr = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];
arr.forEach((item, index) => {
   if(item %  2 !== 0){
      console.log(item);
   }
});


// 2.Задача
let arrStr = ['lorem ipsum', 'javascript', 'php', 'css', 'react', 'git', 'html', 'mysql'];
arrStr.forEach((item, index) => {
   if (item.length <= 4){
      console.log(item);
   }
});

//=======================================FILTER========================================//

// 1.Задача
let num = [1, -3, 5, 6, -7, 8, 9, -11];
let num2 = num.filter((item, index) => {
   return item < 0;
});
console.log(num2);


// 2.Задача
let even = arr.filter((item, index) => {
return item % 2 === 0;
});
console.log(even);


// 3.Задача
let arrString = arrStr.filter((item, index) => {
return item.length !== 3;
});
console.log(arrString);

//=========================================MAP=========================================//

// 1.Задача
let pow = [5, 6, 7, 8, 9];
let powRes = pow.map((item) => {
   return Math.pow(item, 2);
});
console.log(powRes);

// 2.Задача
let arrObj = [
   {
      a: 10,
      b: 5,
   },
   {
      a: 20,
      b: 22,
   },
   {
      a: 131,
      b: 55,
   },
];
let arrObjRes = arrObj.map((item) => {
return item.a + item.b;
});
console.log(arrObjRes);

//=======================================REDUCE========================================//

// 1.Задача
let arrNum = [-13, 0, 12, 1662, -0.32, -102, -2];
let oddNum = arrNum.filter((item) => {
return item < 0;
});
let count = oddNum.reduce((sum, item) => {
return item + sum;
}, 0);
console.log(count);

// 2.Задача
let newArrObj = [
{
   x: 10,
   y: 'lorem',
},
{
   x: 21,
   y: 'lorem',
},
{
   x: -17,
   y: 'lorem',
},
{
   x: 156,
   y: 'lorem',
},
];
let summaX = newArrObj.reduce((sum, item) => {
return item.x + sum;
}, 0);
console.log(summaX);


