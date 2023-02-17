'use strict';

const main = document.getElementById('main');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

first.onclick = image;
second.onclick = image;
third.onclick = image;

first.addEventListener('click', txt);
second.addEventListener('click', txt);
third.addEventListener('click', txt);



function image(){
   let img = this.firstElementChild.firstElementChild.src;
   first.style = `background-color: transparent;`;
   second.style = `background-color: transparent;`;
   third.style = `background-color: transparent;`;
   this.style = `background-color: rgba(255, 255, 255, 0.5);`;
   main.style = `background: center / cover no-repeat url(${img})`
}

function txt(){
   main.innerText = this.innerText;
}