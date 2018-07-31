window.onload= function(){
    const welcome = document.getElementById('welcome');
const User = localStorage.getItem('currentUser');
console.log(User);
welcome.textContent = `Hello, jonh`;

const cvs = document.getElementById('snake');
const ctx = cvs.getContext('2d');


let snake = [];

ctx.fillStyle='#FFF';
ctx.fillRect(10,10,10,10);


}
