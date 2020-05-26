var x = 1;

function foo() {
	// x = undefined
	x = 9;
	console.log(`x in Foo: ${x}`);
	//ip: foo: 9; main: 1
	//ss: in foo 9; in main 1
	//та: undefined in foo, 1 in main
	// v: foo: 9, main: 20
    // ls: foo 9, main 20.
	var x = 20;

}
foo();

console.log(`x in main: ${x}`);