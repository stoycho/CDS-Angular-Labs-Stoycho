// function notPureFunction(x,y) {
// 	console.log( x+y);
// }

/* ----------------------------- a pure function ---------------------------- */
// function add(x,y) {
// 	return x+y;
// }

// const multFunc = function(x,y) {
// 	return x*y
// }

/* ------------------------------ arrow syntax ------------------------------ */
// const multArr = (x,y) => {
// 	return x*y;
// }
// console.dir(multFunc);
// console.dir(multArr);


// const add = (x,y)=>x+y;
// const mult = (x,y)=> x*y;


// let res = mult(add(2,3),2);
// console.log(`res: ${res}`);



/* -------------------------------------------------------------------------- */
/*                         arrow function as callback                         */
/* -------------------------------------------------------------------------- */
// function foo(f) {
// 	let arg = 3;
// 	console.log( f(arg) );
// }

/* ----------------------------- the long syntax ---------------------------- */
// foo( function (x) {
// 	return x**2;
// });

/* ---------------------------- with arrow syntax --------------------------- */
// foo( x=>x**2 )


/* -------------------------------------------------------------------------- */
/*                       arguments are lexically scoped:                      */
/* -------------------------------------------------------------------------- */
// console.log(`arguments in main: ${arguments}`);

// let logArgs = function(){
// 	for (var i = 0; i < arguments.length; i++) {
// 		console.log(arguments[i]);
// 	}
// 	console.dir(arguments);
// }

// logArgs(1,2,3);