'use strict';


// 1.Task
const arr_1 = [101, 202, 303, 404, 505];
const arr_2 = [606, 707, 808, 909];
const superArr = arr_1.concat(arr_2);
console.log(superArr);


// 2.Task
console.log(Math.min(...superArr));


// 3.Task
const obj = {
   width: 300,
   height: 550,
};
console.log(obj);

const obj2 = {...obj}
obj2.area = function (){
   return this.width * this.height;
};
console.log(obj2);
console.log(obj2.area());


// 4.Task
function num(...item){
   let sum = item.reduce((s, i) => {return i + s}, 0)
   console.log(sum);
}
num(5, 800, 10, 30, 5, 300);


// 5.Task
let number = 0;
while (number < 3) {
console.log(number);
number++
};


// 6.Task
for (let num = 1; num <= 10; num++){
   console.log(num);
};


