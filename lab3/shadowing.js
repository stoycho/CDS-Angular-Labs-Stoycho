let x = 5;

function foo(a) {
	x = x + 5;
	console.log(`1. x in foo: ${x}`); //

	var x = 10;

	console.log(`2x in foo: ${x}`); //
}
foo();


console.log(`x in main: ${x}`); // 5