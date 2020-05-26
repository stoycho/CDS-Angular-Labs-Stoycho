let userAge = document.querySelector('[type="number"]');
let btn = document.querySelector('button');
let outBox = document.querySelector('.box');

function calcUserAge() {
	console.log( +userAge.value + 100);
}
btn.addEventListener('click', calcUserAge);
