class Duck{
	constructor(name) {
		this.name = name;
	}
	quacks(){}
	swim(){}
}

class Cat{
	constructor( name) {
		this.name =name;
	}
	quacks(){}
}


function isItDuck(obj) {
	obj.quacks?
	console.log(`${obj.name} is a Duck`):
	console.log(`Not a Duck`);
}

let donald = new Duck('Donald');
let tom = new Cat('Tom');

isItDuck(donald);
isItDuck(tom);
//Argument of type 'Cat' is not assignable to parameter of type 'Duck'.
// Property 'swim' is missing in type 'Cat' but required in type 'Duck'.