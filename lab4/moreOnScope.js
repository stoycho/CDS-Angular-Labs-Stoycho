let x = 1;

function foo() {
	let x = 2;

	function bar() {
		x = 3;
		console.log(`x in bar: ${x}`);
	}
	bar();
	console.log(`x in foo: ${x}`);
}
foo();

console.log(`x in main: ${x}`);
// bar: 3
// foo: 3
// main: 1