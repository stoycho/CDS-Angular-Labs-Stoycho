// const body = document.querySelector('body');

// const setBG = function(color) {
// 	return function () {
// 		body.style.backgroundColor = color;
// 	}
// }

// setTimeout( setBG("#F99"), 3000 );

function add(x) {
	return function (y) {
		console.log(`x+y = ${x+y}`);
	}
}

// let f = add(2);
// f(3);
add(2)(3);

