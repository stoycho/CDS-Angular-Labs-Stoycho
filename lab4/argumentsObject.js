function add(x,y) {
	console.log(`x = ${x}`);
	console.log(`y = ${y}`);
	console.log( arguments );

	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		const element = arguments[i];
		sum += element;
	}

	return sum;
}

let sum = add(2,3,4,5);
console.log(`sum = ${sum}`);